// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import IconButton from '../Button/IconButton';
import styled from 'styled-components';
export var StyledCloseIconButton = styled(IconButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledNotification = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: inline-flex;\n  align-items: flex-start;\n  color: ", ";\n  background-color: ", ";\n  padding: 0.5rem;\n  box-shadow: ", ";\n  border-radius: 0.25rem;\n  margin: 0.5rem;\n  max-width: 45rem;\n\n  .ch-severity-icon {\n    width: 1.5rem;\n    flex-shrink: 0;\n    margin-top: 0.25rem;\n  }\n\n  .ch-message {\n    display: flex;\n    flex-flow: column wrap;\n    font-size: ", ";\n    font-size: ", ";\n    letter-spacing: -0.005625rem;\n    margin: 0.5rem 3.3125rem 0.375rem 0.75rem;\n  }\n\n  ", " {\n    background-color: ", ";\n    color: ", "};\n  }\n\n  ", ":hover, ", ":focus {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", ":active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  display: inline-flex;\n  align-items: flex-start;\n  color: ", ";\n  background-color: ", ";\n  padding: 0.5rem;\n  box-shadow: ", ";\n  border-radius: 0.25rem;\n  margin: 0.5rem;\n  max-width: 45rem;\n\n  .ch-severity-icon {\n    width: 1.5rem;\n    flex-shrink: 0;\n    margin-top: 0.25rem;\n  }\n\n  .ch-message {\n    display: flex;\n    flex-flow: column wrap;\n    font-size: ", ";\n    font-size: ", ";\n    letter-spacing: -0.005625rem;\n    margin: 0.5rem 3.3125rem 0.375rem 0.75rem;\n  }\n\n  ", " {\n    background-color: ",
    ";\n    color: ",
    "};\n  }\n\n  ", ":hover, ", ":focus {\n    background-color: ",
    ";\n    color: ",
    ";\n  }\n\n  ", ":active {\n    background-color: ",
    ";\n    color: ",
    ";\n  }\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.notification[severity].text;
}, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.colors[severity].primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.notification.shadow;
}, function (props) { return props.theme.fontSizes.text.fontSize; }, function (props) { return props.theme.fontSizes.text.lineHeight; }, StyledCloseIconButton, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.colors[severity].primary;
}, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.notification[severity].closeButton.text;
}, StyledCloseIconButton, StyledCloseIconButton, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.notification[severity].closeButton.hover.bgd;
}, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.notification[severity].closeButton.hover.text;
}, StyledCloseIconButton, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.notification[severity].closeButton.active.bgd;
}, function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return theme.notification[severity].closeButton.active.text;
}, baseSpacing, baseStyles);
var templateObject_1, templateObject_2;
//# sourceMappingURL=Styled.js.map