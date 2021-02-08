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
import { ContentActionType, initialState, reducer } from './state';
import { DefaultModality } from 'amazon-chime-sdk-js';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { useAudioVideo } from '../AudioVideoProvider';
var ContentShareContext = createContext(null);
var ContentShareControlContext = createContext(null);
var ContentShareProvider = function (_a) {
    var children = _a.children;
    var audioVideo = useAudioVideo();
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var paused = state.paused, isLocalUserSharing = state.isLocalUserSharing, isLocalShareLoading = state.isLocalShareLoading;
    var localUserTileIdRef = useRef(null);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var videoObserver = {
            videoTileDidUpdate: function (tileState) {
                if (!tileState.boundAttendeeId ||
                    !tileState.isContent ||
                    !tileState.tileId) {
                    return;
                }
                var boundAttendeeId = tileState.boundAttendeeId;
                var baseAttendeeId = new DefaultModality(boundAttendeeId).base();
                var localAttendeeId = audioVideo.audioVideoController
                    .realtimeController.state.localAttendeeId;
                var isLocalUser = baseAttendeeId === localAttendeeId;
                if (!isLocalUser &&
                    localUserTileIdRef.current &&
                    localUserTileIdRef.current < tileState.tileId) {
                    audioVideo.stopContentShare();
                    localUserTileIdRef.current = null;
                }
                if (isLocalUser) {
                    localUserTileIdRef.current = tileState.tileId;
                }
                dispatch({
                    type: ContentActionType.UPDATE,
                    payload: {
                        tileState: tileState,
                        isLocalUser: isLocalUser
                    }
                });
            },
            videoTileWasRemoved: function (tileId) {
                if (tileId === localUserTileIdRef.current) {
                    localUserTileIdRef.current = null;
                }
                dispatch({
                    type: ContentActionType.REMOVE,
                    payload: tileId
                });
            }
        };
        var contentShareObserver = {
            contentShareDidStop: function () {
                dispatch({ type: ContentActionType.DID_STOP });
            }
        };
        audioVideo.addObserver(videoObserver);
        audioVideo.addContentShareObserver(contentShareObserver);
        return function () {
            audioVideo.removeObserver(videoObserver);
            audioVideo.removeContentShareObserver(contentShareObserver);
            dispatch({ type: ContentActionType.RESET });
        };
    }, [audioVideo]);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var cb = function (event) {
            if (event.reason.name === 'NotAllowedError') {
                dispatch({ type: ContentActionType.DENIED });
            }
        };
        window.addEventListener('unhandledrejection', cb);
        return function () { return window.removeEventListener('unhandledrejection', cb); };
    }, [isLocalShareLoading]);
    var toggleContentShare = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!audioVideo) {
                return [2 /*return*/];
            }
            if (isLocalUserSharing || isLocalShareLoading) {
                audioVideo.stopContentShare();
            }
            else {
                audioVideo.startContentShareFromScreenCapture();
                dispatch({ type: ContentActionType.STARTING });
            }
            return [2 /*return*/];
        });
    }); }, [audioVideo, isLocalUserSharing, isLocalShareLoading]);
    var togglePauseContentShare = useCallback(function () {
        if (!audioVideo || !isLocalUserSharing) {
            return;
        }
        if (paused) {
            audioVideo.unpauseContentShare();
        }
        else {
            audioVideo.pauseContentShare();
        }
        dispatch({ type: ContentActionType.TOGGLE_PAUSE });
    }, [audioVideo, paused, isLocalUserSharing]);
    var controlsValue = useMemo(function () { return ({
        paused: paused,
        isLocalUserSharing: isLocalUserSharing,
        isLocalShareLoading: isLocalShareLoading,
        toggleContentShare: toggleContentShare,
        togglePauseContentShare: togglePauseContentShare
    }); }, [
        paused,
        toggleContentShare,
        togglePauseContentShare,
        isLocalUserSharing,
        isLocalShareLoading
    ]);
    return (React.createElement(ContentShareContext.Provider, { value: state },
        React.createElement(ContentShareControlContext.Provider, { value: controlsValue }, children)));
};
var useContentShareState = function () {
    var contentShareState = useContext(ContentShareContext);
    if (!contentShareState) {
        throw new Error('useContentShareState must be used within a ContentShareProvider');
    }
    return contentShareState;
};
var useContentShareControls = function () {
    var context = useContext(ContentShareControlContext);
    if (!context) {
        throw new Error('useContentShareControlContext must be used within ContentShareControlProvider');
    }
    return context;
};
export { ContentShareProvider, useContentShareState, useContentShareControls };
//# sourceMappingURL=index.js.map