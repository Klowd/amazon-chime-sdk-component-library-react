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
import React from 'react';
import ControlBarContext from './ControlBarContext';
import { StyledControlBar } from './Styled';
export var ControlBar = function (_a) {
    var tag = _a.tag, layout = _a.layout, _b = _a.showLabels, showLabels = _b === void 0 ? false : _b, _c = _a.responsive, responsive = _c === void 0 ? true : _c, className = _a.className, children = _a.children, rest = __rest(_a, ["tag", "layout", "showLabels", "responsive", "className", "children"]);
    var controlBarContext = { layout: layout, showLabels: showLabels };
    return (React.createElement(ControlBarContext.Provider, { value: controlBarContext },
        React.createElement(StyledControlBar, __assign({ className: className || '', responsive: responsive, as: tag }, controlBarContext, { "data-testid": "control-bar" }, rest), children)));
};
export default ControlBar;
//# sourceMappingURL=index.js.map