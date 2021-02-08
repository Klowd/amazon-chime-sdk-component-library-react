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
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';
import { videoInputSelectionToDevice } from '../../utils/device-utils';
var Context = createContext(null);
var LocalVideoProvider = function (_a) {
    var children = _a.children;
    var meetingManager = useMeetingManager();
    var audioVideo = useAudioVideo();
    var _b = useState(false), isVideoEnabled = _b[0], setIsVideoEnabled = _b[1];
    var _c = useState(null), tileId = _c[0], setTileId = _c[1];
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        if (audioVideo.hasStartedLocalVideoTile()) {
            setIsVideoEnabled(true);
        }
        return function () {
            setIsVideoEnabled(false);
        };
    }, [audioVideo]);
    var toggleVideo = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(isVideoEnabled || !meetingManager.selectedVideoInputDevice)) return [3 /*break*/, 1];
                    audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.stopLocalVideoTile();
                    setIsVideoEnabled(false);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.chooseVideoInputDevice(videoInputSelectionToDevice(meetingManager.selectedVideoInputDevice)))];
                case 2:
                    _a.sent();
                    audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.startLocalVideoTile();
                    setIsVideoEnabled(true);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, [audioVideo, isVideoEnabled, meetingManager.selectedVideoInputDevice]);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var videoTileDidUpdate = function (tileState) {
            if (!tileState.localTile ||
                !tileState.tileId ||
                tileId === tileState.tileId) {
                return;
            }
            setTileId(tileState.tileId);
        };
        audioVideo.addObserver({
            videoTileDidUpdate: videoTileDidUpdate
        });
    }, [audioVideo, tileId]);
    var value = useMemo(function () { return ({ isVideoEnabled: isVideoEnabled, toggleVideo: toggleVideo, tileId: tileId }); }, [
        isVideoEnabled,
        toggleVideo,
        tileId
    ]);
    return React.createElement(Context.Provider, { value: value }, children);
};
var useLocalVideo = function () {
    var context = useContext(Context);
    if (!context) {
        throw new Error('useLocalVideo must be used within LocalVideoProvider');
    }
    return context;
};
export { LocalVideoProvider, useLocalVideo };
//# sourceMappingURL=index.js.map