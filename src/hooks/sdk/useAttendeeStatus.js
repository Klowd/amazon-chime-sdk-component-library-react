// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { DefaultModality } from 'amazon-chime-sdk-js';
import { useEffect, useState } from 'react';
import useAttendeeAudioStatus from './useAttendeeAudioStatus';
import { useAudioVideo } from '../../providers/AudioVideoProvider';
export function useAttendeeStatus(attendeeId) {
    var audioVideo = useAudioVideo();
    var audioState = useAttendeeAudioStatus(attendeeId);
    var _a = useState(function () {
        var _a, _b, _c;
        if (!audioVideo) {
            return null;
        }
        var localAttendeeId = (_c = (_b = (_a = audioVideo.audioVideoController) === null || _a === void 0 ? void 0 : _a.realtimeController) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.localAttendeeId;
        var isLocalUser = attendeeId === localAttendeeId;
        var tiles = audioVideo.getAllVideoTiles();
        var videoTile = tiles.find(function (tile) {
            var state = tile.state();
            if (state.isContent || (isLocalUser && !state.active)) {
                return false;
            }
            return state.boundAttendeeId === attendeeId;
        });
        return videoTile ? videoTile.state().tileId : null;
    }), videoTileId = _a[0], setVideoTileId = _a[1];
    var _b = useState(function () {
        if (!audioVideo) {
            return null;
        }
        var tiles = audioVideo.getAllVideoTiles();
        var videoTile = tiles.find(function (tile) {
            var state = tile.state();
            if (!state.boundAttendeeId || !state.isContent) {
                return false;
            }
            var baseId = new DefaultModality(state.boundAttendeeId).base();
            return baseId === attendeeId;
        });
        return videoTile ? videoTile.state().tileId : null;
    }), contentTileId = _b[0], setContentTileId = _b[1];
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var observer = {
            videoTileDidUpdate: function (state) {
                if (state.boundAttendeeId !== attendeeId) {
                    return;
                }
                if (state.localTile && videoTileId && !state.boundVideoStream) {
                    setVideoTileId(null);
                    return;
                }
                if (videoTileId || !state.tileId || state.isContent) {
                    return;
                }
                setVideoTileId(state.tileId);
            },
            videoTileWasRemoved: function (tileId) {
                if (tileId === videoTileId) {
                    setVideoTileId(null);
                }
            },
        };
        audioVideo.addObserver(observer);
        return function () { return audioVideo.removeObserver(observer); };
    }, [audioVideo, videoTileId, attendeeId]);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var observer = {
            videoTileDidUpdate: function (state) {
                if (!state.isContent || !state.boundAttendeeId || contentTileId) {
                    return;
                }
                var baseId = new DefaultModality(state.boundAttendeeId).base();
                if (baseId !== attendeeId) {
                    return;
                }
                setContentTileId(state.tileId);
            },
            videoTileWasRemoved: function (tileId) {
                if (tileId === contentTileId) {
                    setContentTileId(null);
                }
            },
        };
        audioVideo.addObserver(observer);
        return function () { return audioVideo.removeObserver(observer); };
    }, [audioVideo, contentTileId, attendeeId]);
    var videoEnabled = typeof videoTileId === 'number' && videoTileId > -1;
    var sharingContent = typeof contentTileId === 'number' && contentTileId > -1;
    return __assign(__assign({}, audioState), { videoEnabled: videoEnabled,
        sharingContent: sharingContent });
}
export default useAttendeeStatus;
//# sourceMappingURL=useAttendeeStatus.js.map