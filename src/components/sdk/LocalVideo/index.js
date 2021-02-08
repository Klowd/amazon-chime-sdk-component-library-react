// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React, { useEffect, useRef, useState } from 'react';
import VideoTile from '../../ui/VideoTile';
import styled from 'styled-components';
import { useApplyVideoObjectFit } from '../../../hooks/useApplyVideoObjectFit';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
var StyledLocalVideo = styled(VideoTile)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return (!props.active ? 'display: none' : ''); });
export var LocalVideo = function (_a) {
    var nameplate = _a.nameplate, rest = __rest(_a, ["nameplate"]);
    var _b = useLocalVideo(), tileId = _b.tileId, isVideoEnabled = _b.isVideoEnabled;
    var audioVideo = useAudioVideo();
    var videoEl = useRef(null);
    useApplyVideoObjectFit(videoEl);
    var _c = useState(function () { return audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.hasStartedLocalVideoTile(); }), active = _c[0], setActive = _c[1];
    useEffect(function () {
        if (!audioVideo || !tileId || !videoEl.current || !isVideoEnabled) {
            return;
        }
        audioVideo.bindVideoElement(tileId, videoEl.current);
        return function () {
            var tile = audioVideo.getVideoTile(tileId);
            if (tile) {
                audioVideo.unbindVideoElement(tileId);
            }
        };
    }, [audioVideo, tileId, isVideoEnabled]);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var observer = {
            videoTileDidUpdate: function (tileState) {
                if (!tileState.boundAttendeeId ||
                    !tileState.localTile ||
                    !tileState.tileId ||
                    !videoEl.current) {
                    return;
                }
                if (tileState.active !== active) {
                    setActive(tileState.active);
                }
            }
        };
        audioVideo.addObserver(observer);
        return function () { return audioVideo.removeObserver(observer); };
    }, [audioVideo, active]);
    return (React.createElement(StyledLocalVideo, __assign({ active: active, nameplate: nameplate, ref: videoEl }, rest)));
};
export default LocalVideo;
var templateObject_1;
//# sourceMappingURL=index.js.map