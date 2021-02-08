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
import IconButton from '../Button/IconButton';
import { Dots } from '../icons';
import PopOver from '../PopOver';
import React from 'react';
import classNames from 'classnames';
export var PopOverMenu = function (_a) {
    var menu = _a.menu, _b = _a.a11yMenuLabel, a11yMenuLabel = _b === void 0 ? '' : _b, buttonProps = _a.buttonProps;
    return (React.createElement(PopOver, { className: "ch-menu", a11yLabel: a11yMenuLabel, renderButtonWrapper: function (isActive, props) { return (React.createElement(IconButton, __assign({}, buttonProps, props, { className: classNames("ch-menu", buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), icon: React.createElement(Dots, null), label: a11yMenuLabel }))); } }, menu));
};
//# sourceMappingURL=PopOverMenu.js.map