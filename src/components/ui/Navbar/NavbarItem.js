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
import ControlBarButton from '../ControlBar/ControlBarItem';
import React from 'react';
import { StyledNavbarItem } from './Styled';
export var NavbarItem = function (_a) {
    var onClick = _a.onClick, label = _a.label, icon = _a.icon, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, _c = _a.popOver, popOver = _c === void 0 ? null : _c, rest = __rest(_a, ["onClick", "label", "icon", "isSelected", "popOver"]);
    return (React.createElement(StyledNavbarItem, __assign({ "data-testid": "navbar-item" }, rest),
        React.createElement(ControlBarButton, { onClick: onClick, label: label, icon: icon, popOver: popOver, isSelected: isSelected }),
        label && (React.createElement("span", { "data-testid": "navbar-label", className: "ch-navigation-bar-item-label", onClick: onClick }, label))));
};
export default NavbarItem;
//# sourceMappingURL=NavbarItem.js.map