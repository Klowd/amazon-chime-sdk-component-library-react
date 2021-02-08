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
import Caret from '../icons/Caret';
import PopOver from './';
import { StyledSubMenu } from './Styled';
export var PopOverSubMenu = function (_a) {
    var text = _a.text, children = _a.children, rest = __rest(_a, ["text", "children"]);
    var getButtonContents = function (isOpen) {
        return (React.createElement(React.Fragment, null,
            text,
            React.createElement(Caret, { className: "ch-caret", direction: "right", "data-testid": "submenu-caret" })));
    };
    return (React.createElement(StyledSubMenu, null,
        React.createElement(PopOver, __assign({ renderButton: function (isOpen) { return getButtonContents(isOpen); }, placement: "right-start", isSubMenu: true, a11yLabel: text }, rest), children)));
};
export default PopOverSubMenu;
//# sourceMappingURL=PopOverSubMenu.js.map