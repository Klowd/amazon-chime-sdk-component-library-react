// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
import React from 'react';
import Svg from '../Svg';
var ZoomIn = function (props) { return (React.createElement(Svg, __assign({}, props),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("g", null,
            React.createElement("path", { d: "M0 0H24V24H0z" }),
            React.createElement("path", { fill: "currentColor", d: "M11 5c3.309 0 6 2.691 6 6 0 1.485-.545 2.843-1.442 3.892l3.294 3.253c.196.193.198.51.003.707-.097.098-.226.148-.355.148-.127 0-.254-.048-.352-.145l-3.299-3.258C13.807 16.472 12.464 17 11 17c-3.309 0-6-2.691-6-6s2.691-6 6-6zm0 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c.276 0 .5.224.5.5v2h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2v2c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2v-2c0-.276.224-.5.5-.5z" }))))); };
ZoomIn.displayName = "ZoomIn";
export default ZoomIn;
//# sourceMappingURL=index.js.map