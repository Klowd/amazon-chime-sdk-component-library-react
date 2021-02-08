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
import IconButton from '../Button/IconButton';
import React from 'react';
import { Remove } from '../icons';
import { StyledHeader } from './Styled';
export var NavbarHeader = function (_a) {
    var title = _a.title, onClose = _a.onClose, rest = __rest(_a, ["title", "onClose"]);
    return (React.createElement(StyledHeader, __assign({}, rest),
        React.createElement("span", { className: "ch-title" }, title),
        onClose && (React.createElement(IconButton, { className: "ch-btn-close", label: "Close", onClick: onClose, icon: React.createElement(Remove, null) }))));
};
export default NavbarHeader;
//# sourceMappingURL=NavbarHeader.js.map