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
import { HiddenCheckbox, StyledCheckbox } from './Styled';
import React, { useRef } from 'react';
import { Check } from '../icons';
export var Checkbox = function (props) {
    var checked = props.checked, onChange = props.onChange, value = props.value;
    var checkboxNode = useRef(null);
    var handleChange = function () {
        var _a, _b;
        (_a = checkboxNode.current) === null || _a === void 0 ? void 0 : _a.click(); // simulate click the native checkbox
        (_b = checkboxNode.current) === null || _b === void 0 ? void 0 : _b.focus();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(HiddenCheckbox, __assign({}, props, { "data-testid": "hidden-checkbox", ref: checkboxNode, type: "checkbox", value: value, onChange: onChange })),
        React.createElement(StyledCheckbox, { "data-testid": "styled-checkbox", checked: checked, className: "ch-checkbox", onClick: handleChange }, checked && React.createElement(Check, { "data-testid": "check" }))));
};
Checkbox.displayName = 'Checkbox';
export default Checkbox;
//# sourceMappingURL=index.js.map