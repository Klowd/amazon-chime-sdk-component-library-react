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
import Svg from '../Svg';
import React from 'react';
var Dock = function (_a) {
    var undock = _a.undock, rest = __rest(_a, ["undock"]);
    return (React.createElement(Svg, __assign({}, rest), undock ? (React.createElement("path", { d: "M11.434 5c.276 0 .5.223.5.5 0 .276-.224.5-.5.5H8.967C7.331 6 6 7.331 6 8.966v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.033v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.033V8.966C5 6.78 6.779 5 8.967 5zM18.5 5c.066 0 .13.014.19.038.124.05.22.149.272.27.024.063.038.127.038.192v4c0 .277-.224.5-.5.5s-.5-.223-.5-.5V6.707l-6.121 6.122c-.098.097-.226.146-.354.146-.127 0-.255-.05-.353-.146-.195-.196-.195-.512 0-.708L17.292 6H14.5c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5z" })) : (React.createElement("path", { d: "M11.434 5c.276 0 .5.223.5.5 0 .276-.224.5-.5.5H8.967C7.331 6 6 7.331 6 8.966v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.033v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.033V8.966C5 6.78 6.779 5 8.967 5zm6.067 1c.127 0 .255.049.353.146.195.196.195.512 0 .708l-6.121 6.12h2.793c.276 0 .5.224.5.5 0 .277-.224.5-.5.5h-4c-.066 0-.13-.013-.191-.037-.123-.051-.22-.15-.271-.271-.024-.062-.038-.126-.038-.191v-4c0-.277.224-.5.5-.5s.5.223.5.5v2.793l6.12-6.122c.099-.097.227-.146.355-.146z" }))));
};
Dock.displayName = 'Dock';
export default Dock;
//# sourceMappingURL=index.js.map