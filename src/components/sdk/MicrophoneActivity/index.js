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
import MicVolumeIndicator from '../../ui/MicVolumeIndicator';
import useAttendeeAudioStatus from '../../../hooks/sdk/useAttendeeAudioStatus';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
export var MicrophoneActivity = function (_a) {
    var attendeeId = _a.attendeeId, rest = __rest(_a, ["attendeeId"]);
    var audioVideo = useAudioVideo();
    var bgEl = useRef(null);
    var _b = useAttendeeAudioStatus(attendeeId), signalStrength = _b.signalStrength, muted = _b.muted;
    useEffect(function () {
        if (!audioVideo || !attendeeId || !bgEl.current) {
            return;
        }
        audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, function (_, volume) {
            if (bgEl.current) {
                bgEl.current.style.transform = "scaleY(" + volume + ")";
            }
        });
        return function () { return audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId); };
    }, [attendeeId]);
    return (React.createElement(MicVolumeIndicator, __assign({}, rest, { ref: bgEl, muted: muted, signalStrength: signalStrength })));
};
export default MicrophoneActivity;
//# sourceMappingURL=index.js.map