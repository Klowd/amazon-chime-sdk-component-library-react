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
import { StyledVideoTile } from './Styled';
export var VideoTile = forwardRef(function (props, ref) {
    var tag = props.tag, className = props.className, nameplate = props.nameplate, rest = __rest(props, ["tag", "className", "nameplate"]);
    return (React.createElement(StyledVideoTile, __assign({ as: tag, className: className || '', "data-testid": "video-tile" }, rest),
        React.createElement("video", { ref: ref, className: "ch-video" }),
        nameplate && (React.createElement("header", { className: "ch-nameplate" },
            React.createElement("p", { className: "ch-text" }, nameplate)))));
});
export default VideoTile;
//# sourceMappingURL=index.js.map