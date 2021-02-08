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
import Check from '../icons/Check';
import { StyledPopOverItem } from './Styled';
export var PopOverItem = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'button' : _b, children = _a.children, checked = _a.checked, rest = __rest(_a, ["as", "children", "checked"]);
    var Tag = as;
    return (React.createElement(StyledPopOverItem, { "data-testid": "popover-item" },
        checked && React.createElement(Check, { className: "ch-check", "data-testid": "popover-check" }),
        React.createElement(Tag, __assign({ className: "ch-content" }, rest), children)));
};
export default PopOverItem;
//# sourceMappingURL=PopOverItem.js.map