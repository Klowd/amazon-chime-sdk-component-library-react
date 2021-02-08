// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { DevicePermissionStatus } from './types';
import { ConsoleLogger, DefaultActiveSpeakerPolicy, DefaultDeviceController, DefaultMeetingSession, LogLevel, MeetingSessionConfiguration, MeetingSessionPOSTLogger, MeetingSessionStatusCode, MultiLogger } from 'amazon-chime-sdk-js';
import { audioInputSelectionToDevice, videoInputSelectionToDevice } from '../../utils/device-utils';
import { MeetingStatus } from '../../types';
var MeetingManager = /** @class */ (function () {
    function MeetingManager(config) {
        var _this = this;
        this.meetingSession = null;
        this.meetingStatus = MeetingStatus.Loading;
        this.meetingStatusObservers = [];
        this.audioVideo = null;
        this.audioVideoObservers = {};
        this.configuration = null;
        this.meetingId = null;
        this.meetingRegion = null;
        this.selectedAudioOutputDevice = null;
        this.selectedAudioOutputDeviceObservers = [];
        this.selectedAudioInputDevice = null;
        this.selectedAudioInputDeviceObservers = [];
        this.selectedVideoInputDevice = null;
        this.selectedVideoInputDeviceObservers = [];
        this.audioInputDevices = null;
        this.audioOutputDevices = null;
        this.videoInputDevices = null;
        this.devicePermissionStatus = DevicePermissionStatus.UNSET;
        this.devicePermissionsObservers = [];
        this.activeSpeakerListener = null;
        this.activeSpeakerCallbacks = [];
        this.activeSpeakers = [];
        this.audioVideoCallbacks = [];
        this.devicesUpdatedCallbacks = [];
        this.logLevel = LogLevel.WARN;
        this.postLoggerConfig = null;
        this.simulcastEnabled = false;
        this.audioVideoDidStart = function () {
            console.log('[MeetingManager audioVideoDidStart] Meeting started successfully');
            _this.meetingStatus = MeetingStatus.Succeeded;
            _this.publishMeetingStatus();
        };
        this.audioVideoDidStop = function (sessionStatus) {
            var sessionStatusCode = sessionStatus.statusCode();
            if (sessionStatusCode === MeetingSessionStatusCode.AudioCallEnded) {
                console.log('[MeetingManager audioVideoDidStop] Meeting ended for all');
                _this.meetingStatus = MeetingStatus.Ended;
                _this.publishMeetingStatus();
            }
            _this.leave();
        };
        this.selectAudioInputDevice = function (deviceId) { return __awaiter(_this, void 0, void 0, function () {
            var receivedDevice, error_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        receivedDevice = audioInputSelectionToDevice(deviceId);
                        if (!(receivedDevice === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.chooseAudioInputDevice(null))];
                    case 1:
                        _c.sent();
                        this.selectedAudioInputDevice = null;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.chooseAudioInputDevice(receivedDevice))];
                    case 3:
                        _c.sent();
                        this.selectedAudioInputDevice = deviceId;
                        _c.label = 4;
                    case 4:
                        this.publishSelectedAudioInputDevice();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _c.sent();
                        console.error("Error setting audio input - " + error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.selectAudioOutputDevice = function (deviceId) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.chooseAudioOutputDevice(deviceId))];
                    case 1:
                        _b.sent();
                        this.selectedAudioOutputDevice = deviceId;
                        this.publishSelectedAudioOutputDevice();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.error("Error setting audio output - " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.selectVideoInputDevice = function (deviceId) { return __awaiter(_this, void 0, void 0, function () {
            var receivedDevice, error_3;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        receivedDevice = videoInputSelectionToDevice(deviceId);
                        if (!(receivedDevice === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.chooseVideoInputDevice(null))];
                    case 1:
                        _c.sent();
                        this.selectedVideoInputDevice = null;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.chooseVideoInputDevice(receivedDevice))];
                    case 3:
                        _c.sent();
                        this.selectedVideoInputDevice = deviceId;
                        _c.label = 4;
                    case 4:
                        this.publishSelectedVideoInputDevice();
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _c.sent();
                        console.error("Error setting video input - " + error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        /**
         * ====================================================================
         * Subscriptions
         * ====================================================================
         */
        this.subscribeToAudioVideo = function (callback) {
            _this.audioVideoCallbacks.push(callback);
        };
        this.unsubscribeFromAudioVideo = function (callbackToRemove) {
            _this.audioVideoCallbacks = _this.audioVideoCallbacks.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishAudioVideo = function () {
            _this.audioVideoCallbacks.forEach(function (callback) {
                callback(_this.audioVideo);
            });
        };
        this.subscribeToActiveSpeaker = function (callback) {
            _this.activeSpeakerCallbacks.push(callback);
            callback(_this.activeSpeakers);
        };
        this.unsubscribeFromActiveSpeaker = function (callbackToRemove) {
            _this.activeSpeakerCallbacks = _this.activeSpeakerCallbacks.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishActiveSpeaker = function () {
            _this.activeSpeakerCallbacks.forEach(function (callback) {
                callback(_this.activeSpeakers);
            });
        };
        this.subscribeToDevicePermissionStatus = function (callback) {
            _this.devicePermissionsObservers.push(callback);
        };
        this.unsubscribeFromDevicePermissionStatus = function (callbackToRemove) {
            _this.devicePermissionsObservers = _this.devicePermissionsObservers.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishDevicePermissionStatus = function () {
            for (var i = 0; i < _this.devicePermissionsObservers.length; i += 1) {
                var callback = _this.devicePermissionsObservers[i];
                callback(_this.devicePermissionStatus);
            }
        };
        this.subscribeToSelectedVideoInputDevice = function (callback) {
            _this.selectedVideoInputDeviceObservers.push(callback);
        };
        this.unsubscribeFromSelectedVideoInputDevice = function (callbackToRemove) {
            _this.selectedVideoInputDeviceObservers = _this.selectedVideoInputDeviceObservers.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishSelectedVideoInputDevice = function () {
            for (var i = 0; i < _this.selectedVideoInputDeviceObservers.length; i += 1) {
                var callback = _this.selectedVideoInputDeviceObservers[i];
                callback(_this.selectedVideoInputDevice);
            }
        };
        this.subscribeToSelectedAudioInputDevice = function (callback) {
            _this.selectedAudioInputDeviceObservers.push(callback);
        };
        this.unsubscribeFromSelectedAudioInputDevice = function (callbackToRemove) {
            _this.selectedAudioInputDeviceObservers = _this.selectedAudioInputDeviceObservers.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishSelectedAudioInputDevice = function () {
            for (var i = 0; i < _this.selectedAudioInputDeviceObservers.length; i += 1) {
                var callback = _this.selectedAudioInputDeviceObservers[i];
                callback(_this.selectedAudioInputDevice);
            }
        };
        this.subscribeToSelectedAudioOutputDevice = function (callback) {
            _this.selectedAudioOutputDeviceObservers.push(callback);
        };
        this.unsubscribeFromSelectedAudioOutputDevice = function (callbackToRemove) {
            _this.selectedAudioOutputDeviceObservers = _this.selectedAudioOutputDeviceObservers.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishSelectedAudioOutputDevice = function () {
            for (var i = 0; i < _this.selectedAudioOutputDeviceObservers.length; i += 1) {
                var callback = _this.selectedAudioOutputDeviceObservers[i];
                callback(_this.selectedAudioOutputDevice);
            }
        };
        this.subscribeToMeetingStatus = function (callback) {
            _this.meetingStatusObservers.push(callback);
            callback(_this.meetingStatus);
        };
        this.unsubscribeFromMeetingStatus = function (callbackToRemove) {
            _this.meetingStatusObservers = _this.meetingStatusObservers.filter(function (callback) { return callback !== callbackToRemove; });
        };
        this.publishMeetingStatus = function () {
            _this.meetingStatusObservers.forEach(function (callback) {
                callback(_this.meetingStatus);
            });
        };
        this.logLevel = config.logLevel;
        if (config.simulcastEnabled) {
            this.simulcastEnabled = config.simulcastEnabled;
        }
        if (config.postLogConfig) {
            this.postLoggerConfig = config.postLogConfig;
        }
    }
    MeetingManager.prototype.initializeMeetingManager = function () {
        this.meetingSession = null;
        this.audioVideo = null;
        this.configuration = null;
        this.meetingId = null;
        this.meetingRegion = null;
        this.selectedAudioOutputDevice = null;
        this.selectedAudioInputDevice = null;
        this.selectedVideoInputDevice = null;
        this.audioInputDevices = [];
        this.audioOutputDevices = [];
        this.videoInputDevices = [];
        this.activeSpeakers = [];
        this.activeSpeakerListener = null;
        this.meetingStatus = MeetingStatus.Loading;
        this.publishMeetingStatus();
        this.meetingStatusObservers = [];
        this.audioVideoObservers = {};
    };
    MeetingManager.prototype.join = function (_a) {
        var meetingInfo = _a.meetingInfo, attendeeInfo = _a.attendeeInfo;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.configuration = new MeetingSessionConfiguration(meetingInfo, attendeeInfo);
                        if (this.simulcastEnabled) {
                            this.configuration.enableUnifiedPlanForChromiumBasedBrowsers = true;
                            this.configuration.enableSimulcastForUnifiedPlanChromiumBasedBrowsers = true;
                        }
                        ;
                        this.meetingRegion = meetingInfo.MediaRegion;
                        this.meetingId = this.configuration.meetingId;
                        return [4 /*yield*/, this.initializeMeetingSession(this.configuration)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeetingManager.prototype.start = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.start();
                return [2 /*return*/];
            });
        });
    };
    MeetingManager.prototype.leave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.audioVideo) return [3 /*break*/, 7];
                        this.audioVideo.stopContentShare();
                        this.audioVideo.stopLocalVideoTile();
                        this.audioVideo.unbindAudioElement();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.audioVideo.chooseVideoInputDevice(null)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.audioVideo.chooseAudioInputDevice(null)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.audioVideo.chooseAudioOutputDevice(null)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log('Unable to set device to null on leave.');
                        return [3 /*break*/, 6];
                    case 6:
                        if (this.activeSpeakerListener) {
                            this.audioVideo.unsubscribeFromActiveSpeakerDetector(this.activeSpeakerListener);
                        }
                        this.audioVideo.stop();
                        this.audioVideo.removeObserver(this.audioVideoObservers);
                        _a.label = 7;
                    case 7:
                        this.initializeMeetingManager();
                        this.publishAudioVideo();
                        this.publishActiveSpeaker();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeetingManager.prototype.initializeMeetingSession = function (configuration) {
        return __awaiter(this, void 0, void 0, function () {
            var logger, deviceController;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger = this.createLogger(configuration);
                        deviceController = new DefaultDeviceController(logger);
                        this.meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
                        this.audioVideo = this.meetingSession.audioVideo;
                        this.setupAudioVideoObservers();
                        this.setupDeviceLabelTrigger();
                        return [4 /*yield*/, this.listAndSelectDevices()];
                    case 1:
                        _a.sent();
                        this.publishAudioVideo();
                        this.setupActiveSpeakerDetection();
                        this.meetingStatus = MeetingStatus.Loading;
                        this.publishMeetingStatus();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeetingManager.prototype.createLogger = function (configuration) {
        var consoleLogger = new ConsoleLogger('SDK', this.logLevel);
        var logger = consoleLogger;
        if (this.postLoggerConfig) {
            logger = new MultiLogger(consoleLogger, new MeetingSessionPOSTLogger(this.postLoggerConfig.name, configuration, this.postLoggerConfig.batchSize, this.postLoggerConfig.intervalMs, this.postLoggerConfig.url, this.postLoggerConfig.logLevel));
        }
        return logger;
    };
    MeetingManager.prototype.setupAudioVideoObservers = function () {
        if (!this.audioVideo) {
            return;
        }
        this.audioVideoObservers = {
            audioVideoDidStart: this.audioVideoDidStart,
            audioVideoDidStop: this.audioVideoDidStop
        };
        this.audioVideo.addObserver(this.audioVideoObservers);
    };
    MeetingManager.prototype.updateDeviceLists = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _d = this;
                        return [4 /*yield*/, ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.listAudioInputDevices())];
                    case 1:
                        _d.audioInputDevices =
                            (_g.sent()) || [];
                        _e = this;
                        return [4 /*yield*/, ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.listVideoInputDevices())];
                    case 2:
                        _e.videoInputDevices =
                            (_g.sent()) || [];
                        _f = this;
                        return [4 /*yield*/, ((_c = this.audioVideo) === null || _c === void 0 ? void 0 : _c.listAudioOutputDevices())];
                    case 3:
                        _f.audioOutputDevices =
                            (_g.sent()) || [];
                        return [2 /*return*/];
                }
            });
        });
    };
    MeetingManager.prototype.setupDeviceLabelTrigger = function () {
        var _this = this;
        var _a;
        var callback = function () { return __awaiter(_this, void 0, void 0, function () {
            var stream, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.devicePermissionStatus = DevicePermissionStatus.IN_PROGRESS;
                        this.publishDevicePermissionStatus();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                audio: true,
                                video: true
                            })];
                    case 2:
                        stream = _a.sent();
                        this.devicePermissionStatus = DevicePermissionStatus.GRANTED;
                        this.publishDevicePermissionStatus();
                        return [2 /*return*/, stream];
                    case 3:
                        e_2 = _a.sent();
                        console.error('Failed to get device permissions');
                        this.devicePermissionStatus = DevicePermissionStatus.DENIED;
                        this.publishDevicePermissionStatus();
                        throw new Error(e_2);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.setDeviceLabelTrigger(callback);
    };
    MeetingManager.prototype.setupActiveSpeakerDetection = function () {
        var _this = this;
        var _a;
        this.publishActiveSpeaker();
        this.activeSpeakerListener = function (activeSpeakers) {
            _this.activeSpeakers = activeSpeakers;
            _this.activeSpeakerCallbacks.forEach(function (cb) { return cb(activeSpeakers); });
        };
        (_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.subscribeToActiveSpeakerDetector(new DefaultActiveSpeakerPolicy(), this.activeSpeakerListener);
    };
    MeetingManager.prototype.listAndSelectDevices = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.updateDeviceLists()];
                    case 1:
                        _c.sent();
                        if (!(!this.selectedAudioInputDevice &&
                            this.audioInputDevices &&
                            this.audioInputDevices.length)) return [3 /*break*/, 3];
                        this.selectedAudioInputDevice = this.audioInputDevices[0].deviceId;
                        return [4 /*yield*/, ((_a = this.audioVideo) === null || _a === void 0 ? void 0 : _a.chooseAudioInputDevice(this.audioInputDevices[0].deviceId))];
                    case 2:
                        _c.sent();
                        this.publishSelectedAudioInputDevice();
                        _c.label = 3;
                    case 3:
                        if (!(!this.selectedAudioOutputDevice &&
                            this.audioOutputDevices &&
                            this.audioOutputDevices.length)) return [3 /*break*/, 5];
                        this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
                        return [4 /*yield*/, ((_b = this.audioVideo) === null || _b === void 0 ? void 0 : _b.chooseAudioOutputDevice(this.audioOutputDevices[0].deviceId))];
                    case 4:
                        _c.sent();
                        this.publishSelectedAudioOutputDevice();
                        _c.label = 5;
                    case 5:
                        if (!this.selectedVideoInputDevice &&
                            this.videoInputDevices &&
                            this.videoInputDevices.length) {
                            this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
                            this.publishSelectedVideoInputDevice();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MeetingManager;
}());
export { MeetingManager };
export default MeetingManager;
//# sourceMappingURL=MeetingManager.js.map