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
var StyledCaret = styled(Svg)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: ", ";\n"], ["\n  transform: ",
    ";\n"])), function (_a) {
    var direction = _a.direction;
    return "rotate(" + dirTransform[direction || 'up'] + "deg)";
});
var Caret = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'up' : _b, rest = __rest(_a, ["direction"]);
    return (React.createElement(StyledCaret, __assign({ direction: direction }, rest),
        React.createElement("path", { "transform-origin": "center", d: "M8.824 13.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722z" })));
};
Caret.displayName = 'Caret';
export default Caret;
var templateObject_1;
//# sourceMappingURL=index.js.map