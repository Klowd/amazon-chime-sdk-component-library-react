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
import { ContentTile } from '../../ui/ContentTile';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useContentShareState } from '../../../providers/ContentShareProvider';
export var ContentShare = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var audioVideo = useAudioVideo();
    var tileId = useContentShareState().tileId;
    var videoEl = useRef(null);
    useEffect(function () {
        if (!audioVideo || !videoEl.current || !tileId) {
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
    return tileId ? (React.createElement(ContentTile, __assign({ objectFit: "contain", className: className || '' }, rest, { ref: videoEl }))) : null;
};
export default ContentShare;
//# sourceMappingURL=index.js.map