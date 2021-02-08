// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { VideoTileActionType, initialState, reducer } from './state';
import { useAudioVideo } from '../AudioVideoProvider';
var Context = createContext(null);
var RemoteVideoTileProvider = function (_a) {
    var children = _a.children;
    var audioVideo = useAudioVideo();
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var observer = {
            videoTileDidUpdate: function (tileState) {
                if ((tileState === null || tileState === void 0 ? void 0 : tileState.boundAttendeeId) && (tileState === null || tileState === void 0 ? void 0 : tileState.tileId) &&
                    !tileState.isContent &&
                    !tileState.localTile) {
                    var tileId = tileState.tileId, boundAttendeeId = tileState.boundAttendeeId;
                    dispatch({
                        type: VideoTileActionType.UPDATE,
                        payload: {
                            tileId: tileId,
                            attendeeId: boundAttendeeId
                        }
                    });
                }
            },
            videoTileWasRemoved: function (tileId) {
                dispatch({
                    type: VideoTileActionType.REMOVE,
                    payload: {
                        tileId: tileId
                    }
                });
            }
        };
        audioVideo.addObserver(observer);
        return function () { return audioVideo.removeObserver(observer); };
    }, [audioVideo]);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        return function () { return dispatch({ type: VideoTileActionType.RESET }); };
    }, [audioVideo]);
    return React.createElement(Context.Provider, { value: state }, children);
};
var useRemoteVideoTileState = function () {
    var state = useContext(Context);
    if (!state) {
        throw new Error('useRemoteVideoTileState must be used within a RemoteVideoTileProvider');
    }
    return state;
};
export { RemoteVideoTileProvider, useRemoteVideoTileState };
//# sourceMappingURL=index.js.map