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
import { StyledButton } from './Styled';
export var Button = forwardRef(function (props, ref) { return (React.createElement(StyledButton, __assign({}, props, { className: props.className || '', as: props.tag, ref: ref, "aria-label": props.label, "data-testid": "button", disabled: props.disabled }),
    props.icon && (React.createElement("span", { className: "ch-icon", "data-testid": "button-icon" }, props.icon)),
    React.createElement("span", { className: "ch-label", "data-testid": "button-label" }, props.label))); });
export default Button;
//# sourceMappingURL=index.js.map