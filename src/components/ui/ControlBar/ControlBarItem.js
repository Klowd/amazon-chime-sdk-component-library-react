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
import PopOver from '../PopOver';
import PopOverItem from '../PopOver/PopOverItem';
import React from 'react';
import { StyledControlBarItem, isVertical } from './Styled';
import Caret from '../icons/Caret';
import IconButton from '../Button/IconButton';
import { useControlBarContext } from './ControlBarContext';
export var ControlBarButton = function (_a) {
    var icon = _a.icon, onClick = _a.onClick, label = _a.label, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, _c = _a.popOver, popOver = _c === void 0 ? null : _c, popOverPlacement = _a.popOverPlacement, popOverLabel = _a.popOverLabel, children = _a.children, rest = __rest(_a, ["icon", "onClick", "label", "isSelected", "popOver", "popOverPlacement", "popOverLabel", "children"]);
    var context = useControlBarContext();
    var renderPopOver = function () { return (React.createElement(PopOver, { renderButtonWrapper: function (isActive, props) { return (React.createElement(IconButton, __assign({}, props, { icon: React.createElement(Caret, { direction: isVertical(context.layout) ? 'right' : 'up', "data-testid": "control-bar-item-caret" }), label: popOverLabel || label, selected: isActive, className: "ch-control-bar-item-caret " + (isActive ? 'isOpen' : '') }))); }, a11yLabel: label, className: "ch-control-bar-popover", placement: popOverPlacement }, popOver === null || popOver === void 0 ? void 0 :
        popOver.map(function (option, index) { return (React.createElement(PopOverItem, __assign({}, option, { key: index }))); }),
        children)); };
    return (React.createElement(StyledControlBarItem, __assign({ isSelected: isSelected, "data-testid": "control-bar-item" }, rest, context, { popOver: popOver }),
        React.createElement(IconButton, { onClick: onClick, label: label, icon: icon, className: "ch-control-bar-item-iconButton", selected: isSelected }),
        (popOver || children) && renderPopOver(),
        context.showLabels && (React.createElement("div", { className: "ch-control-bar-item-label" }, label))));
};
export default ControlBarButton;
//# sourceMappingURL=ControlBarItem.js.map