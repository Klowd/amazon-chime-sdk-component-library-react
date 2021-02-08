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
import IconButton from '../Button/IconButton';
import Remove from '../icons/Remove';
import { StyledModalHeader } from './Styled';
import { useModalContext } from './ModalContext';
export var ModalHeader = function (_a) {
    var _b = _a.tag, Tag = _b === void 0 ? 'div' : _b, _c = _a.displayClose, displayClose = _c === void 0 ? true : _c, title = _a.title, rest = __rest(_a, ["tag", "displayClose", "title"]);
    var context = useModalContext();
    var handleClick = function () {
        return context && context.onClose();
    };
    return (React.createElement(StyledModalHeader, __assign({}, rest),
        React.createElement(Tag, { className: "ch-title", id: context.labelID }, title),
        displayClose && (React.createElement(IconButton, { label: "Close", icon: React.createElement(Remove, null), className: "ch-close-button", onClick: handleClick }))));
};
export default ModalHeader;
//# sourceMappingURL=ModalHeader.js.map