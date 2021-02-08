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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef } from 'react';
import { VideoTile } from '../../ui/VideoTile';
import { useApplyVideoObjectFit } from '../../../hooks/useApplyVideoObjectFit';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
export var RemoteVideo = function (_a) {
    var name = _a.name, className = _a.className, tileId = _a.tileId, rest = __rest(_a, ["name", "className", "tileId"]);
    var audioVideo = useAudioVideo();
    var videoEl = useRef(null);
    useApplyVideoObjectFit(videoEl);
    useEffect(function () {
        if (!audioVideo || !videoEl.current) {
            return;
        }
        audioVideo.bindVideoElement(tileId, videoEl.current);
        return function () {
            var tile = audioVideo.getVideoTile(tileId);
            if (tile) {
                audioVideo.unbindVideoElement(tileId);
            }
        };
    }, [audioVideo, tileId]);
    return (React.createElement(VideoTile, __assign({}, rest, { ref: videoEl, nameplate: name, className: "ch-remote-video--" + tileId + " " + (className || '') })));
};
export default RemoteVideo;
//# sourceMappingURL=index.js.map