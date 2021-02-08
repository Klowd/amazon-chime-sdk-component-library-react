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
import React, { forwardRef } from 'react';
import { StyledInputWrapper } from './Styled';
export var InputWrapper = forwardRef(function (props, ref) {
    var leadingIcon = props.leadingIcon, children = props.children;
    return (React.createElement(StyledInputWrapper, __assign({ ref: ref }, props, { "data-testid": "input-wrapper" }),
        leadingIcon && React.createElement("span", { className: "ch-icon" }, leadingIcon),
        children));
});
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map