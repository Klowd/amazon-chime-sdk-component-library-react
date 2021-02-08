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
import React, { forwardRef, } from 'react';
import { StyledSelectInput, StyledWrapper } from './Styled';
import UpAndDownCaret from '../icons/UpAndDownCaret';
var renderOptions = function (options) {
    return options.map(function (_a) {
        var value = _a.value, label = _a.label;
        return (React.createElement("option", { key: value, value: value }, label));
    });
};
var upAndDownCaretStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0.2rem',
    width: '1.5rem',
    height: '1.5rem',
};
export var Select = forwardRef(function (props, ref) { return (React.createElement(StyledWrapper, null,
    React.createElement(StyledSelectInput, __assign({ className: "ch-select", "data-testid": "select", ref: ref }, props), renderOptions(props.options)),
    React.createElement(UpAndDownCaret, { style: upAndDownCaretStyle, className: "ch-select-icon", "data-testid": "select-icon" }))); });
Select.displayName = 'Select';
export default Select;
//# sourceMappingURL=index.js.map