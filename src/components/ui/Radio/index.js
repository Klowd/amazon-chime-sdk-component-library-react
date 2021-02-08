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
import { HiddenRadio, StyledRadioIcon, StyledRadioLabel, StyledRadioWrapper, } from './Styled';
import React, { useRef } from 'react';
import Label from '../Label';
import useUniqueId from '../../../hooks/useUniqueId';
export var Radio = function (props) {
    var value = props.value, checked = props.checked, label = props.label, icon = props.icon, onChange = props.onChange, rest = __rest(props, ["value", "checked", "label", "icon", "onChange"]);
    var radioNode = useRef(null);
    var labelId = useUniqueId();
    var handleChange = function () {
        var _a, _b;
        (_a = radioNode.current) === null || _a === void 0 ? void 0 : _a.click(); // simulate click the native checkbox
        (_b = radioNode.current) === null || _b === void 0 ? void 0 : _b.focus();
    };
    return (React.createElement(StyledRadioWrapper, { className: "ch-radio-wrapper" },
        React.createElement(HiddenRadio, __assign({ checked: checked, id: labelId, onChange: onChange, type: "radio", value: value, ref: radioNode, "data-testid": "hidden-radio", "aria-label": label }, rest)),
        icon ? (React.createElement(React.Fragment, null,
            React.createElement(StyledRadioIcon, { checked: checked, className: "ch-radio", onClick: handleChange, "data-testid": "styled-radio-icon" },
                React.createElement("span", { className: "ch-icon" }, icon)))) : (React.createElement(React.Fragment, null,
            React.createElement(StyledRadioLabel, { checked: checked, className: "ch-radio", onClick: handleChange, "data-testid": "styled-radio" }),
            React.createElement(Label, { htmlFor: labelId, className: "ch-radio-label" }, label)))));
};
Radio.displayName = 'Radio';
export default Radio;
//# sourceMappingURL=index.js.map