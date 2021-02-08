// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import styled from 'styled-components';
export var StyledBadge = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  display: inline-block;\n  padding: ", ";\n  border-radius: 0.5rem;\n  line-height: ", ";\n  color: ", ";\n  font-size: 0.65rem;\n  background-color: ", ";\n\n  ", ";\n  ", "\n"], ["\n  ",
    "\n  display: inline-block;\n  padding: ",
    ";\n  border-radius: 0.5rem;\n  line-height: ",
    ";\n  color: ", ";\n  font-size: 0.65rem;\n  background-color: ",
    ";\n\n  ", ";\n  ", "\n"])), function (props) {
    if ((typeof props.value) === 'object') {
        var element = (props.value);
        var width = (element.props && element.props.width) || '1rem';
        return "width: " + width + ";";
    }
    return null;
}, function (props) {
    return (typeof props.value) === 'object'
        ? '0'
        : '0.1rem 0.4rem 0.125rem';
}, function (props) {
    return (typeof props.value) === 'object'
        ? '1'
        : '1.43';
}, function (props) { return props.theme.colors.greys.white; }, function (props) {
    return props.status === 'alert'
        ? props.theme.colors.error.primary
        : props.theme.colors.greys.grey60;
}, baseSpacing, baseStyles);
var templateObject_1;
//# sourceMappingURL=Styled.js.map