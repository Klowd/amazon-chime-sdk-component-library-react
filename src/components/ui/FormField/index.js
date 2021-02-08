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
import React, { forwardRef } from 'react';
import Label from '../Label';
import { StyledFormField } from './Styled';
import useUniqueId from '../../../hooks/useUniqueId';
export var FormField = forwardRef(function (props, ref) {
    var _a;
    var Field = props.field, label = props.label, _b = props.layout, layout = _b === void 0 ? 'stack' : _b, errorText = props.errorText, fieldProps = props.fieldProps, infoText = props.infoText, error = props.error, onChange = props.onChange, value = props.value, checked = props.checked, options = props.options, className = props.className, rest = __rest(props, ["field", "label", "layout", "errorText", "fieldProps", "infoText", "error", "onChange", "value", "checked", "options", "className"]);
    var displayName = ((_a = Field.displayName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
    var labelId = useUniqueId();
    var descriptionId = useUniqueId();
    var helpText = (error && errorText) || infoText;
    var renderLabel = function () {
        if (layout === 'input-only' && displayName !== 'checkbox') {
            return null;
        }
        if (displayName !== 'radiogroup') {
            return (React.createElement(Label, { htmlFor: labelId, className: "ch-" + displayName + "-label" }, label));
        }
        return false;
    };
    return (React.createElement(StyledFormField, __assign({ layout: layout, error: error, className: "ch-form-field-" + displayName + " " + (className || ''), "data-testid": "form-field" }, rest),
        renderLabel(),
        displayName === 'radiogroup' ? (React.createElement("fieldset", { "aria-describedby": helpText && descriptionId, "aria-invalid": error },
            label && React.createElement("legend", null, label),
            React.createElement(Field, __assign({ options: options, ref: ref, id: labelId, onChange: onChange, value: value }, fieldProps)))) : (React.createElement(Field, __assign({ options: options, "aria-label": (layout === 'input-only' && label) || null, "aria-describedby": helpText && descriptionId, "aria-invalid": error, ref: ref, id: labelId, onChange: onChange, value: value, checked: checked }, fieldProps))),
        helpText && (React.createElement("span", { className: "ch-help-text", id: descriptionId }, helpText))));
});
export default FormField;
//# sourceMappingURL=index.js.map