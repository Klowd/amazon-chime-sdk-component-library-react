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
import React, { forwardRef } from 'react';
import Microphone from '../icons/Microphone';
import { StyledMicVolumeIndicator } from './Styled';
export var MicVolumeIndicator = forwardRef(function (_a, bgRef) {
    var _b = _a.muted, muted = _b === void 0 ? false : _b, signalStrength = _a.signalStrength, rest = __rest(_a, ["muted", "signalStrength"]);
    var poorConnection = signalStrength !== undefined && signalStrength <= 0.5;
    return (React.createElement(StyledMicVolumeIndicator, __assign({}, rest, { signalStrength: signalStrength, muted: muted, className: "ch-mic-volume-indicator" }),
        React.createElement(Microphone, { muted: muted, className: "ch-mic-icon", poorConnection: poorConnection }),
        React.createElement("div", { className: "ch-bg-volume-wrapper" },
            React.createElement("div", { ref: bgRef, className: "ch-bg-volume-fill", "data-testid": "volume-fill" }))));
});
export default MicVolumeIndicator;
//# sourceMappingURL=index.js.map