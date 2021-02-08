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
import Svg from '../Svg';
import React from 'react';
import styled from 'styled-components';
var dirTransform = {
    up: '0',
    right: '90',
    down: '180',
    left: '270'
};
var StyledArrow = styled(Svg)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: ", ";\n"], ["\n  transform: ",
    ";\n"])), function (_a) {
    var direction = _a.direction;
    return "rotate(" + dirTransform[direction || 'up'] + "deg)";
});
var Arrow = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'up' : _b, rest = __rest(_a, ["direction"]);
    return (React.createElement(StyledArrow, __assign({ direction: direction }, rest),
        React.createElement("path", { "transform-origin": "center", d: "M16.85 10.53l-4.495-4.39c-.094-.09-.214-.132-.335-.136C12.013 6.003 12.007 6 12 6c-.006 0-.012.003-.02.004-.12.004-.24.047-.334.137L7.15 10.53c-.197.193-.201.51-.008.707.098.1.228.15.357.15.126 0 .252-.046.35-.141l3.646-3.56v9.812c0 .277.223.5.5.5.276 0 .5-.223.5-.5V7.677l3.655 3.57c.097.095.223.142.349.142.13 0 .26-.05.358-.151.193-.197.189-.514-.008-.707" })));
};
Arrow.displayName = "Arrow";
export default Arrow;
var templateObject_1;
//# sourceMappingURL=index.js.map