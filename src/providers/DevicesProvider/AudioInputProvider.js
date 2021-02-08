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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AUDIO_INPUT } from '../../constants/additional-audio-video-devices';
import { getFormattedDropdownDeviceOptions } from '../../utils/device-utils';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';
var Context = createContext(null);
var AudioInputProvider = function (_a) {
    var children = _a.children;
    var meetingManager = useMeetingManager();
    var audioVideo = useAudioVideo();
    var _b = useState([]), audioInputs = _b[0], setAudioInputs = _b[1];
    var _c = useState(meetingManager.selectedAudioInputDevice), selectedAudioInputDevice = _c[0], setSelectedAudioInputDevice = _c[1];
    var selectedInputRef = useRef(selectedAudioInputDevice);
    selectedInputRef.current = selectedAudioInputDevice;
    useEffect(function () {
        var callback = function (updatedAudioInputDevice) {
            setSelectedAudioInputDevice(updatedAudioInputDevice);
        };
        meetingManager.subscribeToSelectedAudioInputDevice(callback);
        return function () {
            meetingManager.unsubscribeFromSelectedAudioInputDevice(callback);
        };
    }, []);
    useEffect(function () {
        var isMounted = true;
        var observer = {
            audioInputsChanged: function (newAudioInputs) { return __awaiter(void 0, void 0, void 0, function () {
                var hasSelectedDevice;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('AudioInputProvider - audio inputs updated');
                            hasSelectedDevice = newAudioInputs.some(function (device) { return device.deviceId === selectedInputRef.current; });
                            if (!(selectedInputRef.current
                                && !hasSelectedDevice
                                && newAudioInputs.length)) return [3 /*break*/, 1];
                            console.log("Previously selected audio input lost. Selecting a default device.");
                            meetingManager.selectAudioInputDevice(newAudioInputs[0].deviceId);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(selectedInputRef.current === "default")) return [3 /*break*/, 3];
                            console.log("Audio devices updated and \"default\" device is selected. Reselecting input.");
                            return [4 /*yield*/, (audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.chooseAudioInputDevice(selectedInputRef.current))];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            setAudioInputs(newAudioInputs);
                            return [2 /*return*/];
                    }
                });
            }); }
        };
        function initAudioInput() {
            return __awaiter(this, void 0, void 0, function () {
                var devices;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!audioVideo) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, audioVideo.listAudioInputDevices()];
                        case 1:
                            devices = _a.sent();
                            if (isMounted) {
                                setAudioInputs(devices);
                                audioVideo.addDeviceChangeObserver(observer);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        initAudioInput();
        return function () {
            isMounted = false;
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.removeDeviceChangeObserver(observer);
        };
    }, [audioVideo]);
    var contextValue = useMemo(function () { return ({
        devices: audioInputs,
        selectedDevice: selectedAudioInputDevice
    }); }, [audioInputs, selectedAudioInputDevice]);
    return React.createElement(Context.Provider, { value: contextValue }, children);
};
var useAudioInputs = function (props) {
    var needAdditionalIO = props && props.additionalDevices;
    var context = useContext(Context);
    if (!context) {
        throw new Error('useAudioInputs must be used within AudioInputProvider');
    }
    var devices = context.devices;
    var selectedDevice = context.selectedDevice;
    if (needAdditionalIO) {
        var additionalAudioInputs = getFormattedDropdownDeviceOptions(AUDIO_INPUT);
        if (additionalAudioInputs !== null) {
            devices = __spreadArrays(devices, additionalAudioInputs);
        }
    }
    return { devices: devices, selectedDevice: selectedDevice };
};
export { AudioInputProvider, useAudioInputs };
//# sourceMappingURL=AudioInputProvider.js.map