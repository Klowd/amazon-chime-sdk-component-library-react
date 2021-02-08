// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import styled, { css } from 'styled-components';
import { visuallyHidden } from '../../../utils/style';
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", ";\n  font-size: ", ";\n  padding: 0.5rem 1rem;\n  border-color: transparent;\n  transition: background-color 0.1s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  .ch-icon {\n    width: ", ";\n    height: ", ";\n    margin-right: 0.25rem;\n  }\n\n  /* variant styles */\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n"], ["\n  border-radius: ", ";\n  font-size: ", ";\n  padding: 0.5rem 1rem;\n  border-color: transparent;\n  transition: background-color 0.1s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  .ch-icon {\n    width: ", ";\n    height: ", ";\n    margin-right: 0.25rem;\n  }\n\n  /* variant styles */\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n"])), function (props) { return props.theme.radii.default; }, function (props) { return props.theme.fontSizes.text.fontSize; }, function (props) { return props.theme.iconButtonSizes[props.iconSize || 'sm']; }, function (props) { return props.theme.iconButtonSizes[props.iconSize || 'sm']; }, function (props) { return props.variant === 'primary' && StyledPrimaryButton; }, function (props) { return props.variant === 'secondary' && StyledSecondaryButton; }, function (props) { return props.variant === 'icon' && StyledIconButton; }, baseSpacing, baseStyles);
export var StyledPrimaryButton = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  box-shadow: ", ";\n\n  &:focus {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:focus:hover {\n    box-shadow: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  background-color: ",
    ";\n  color: ",
    ";\n  border: ",
    ";\n  box-shadow: ", ";\n\n  &:focus {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:focus:hover {\n    box-shadow: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
    return props.selected
        ? props.theme.buttons.primary.selected.bgd
        : props.theme.buttons.primary.static.bgd;
}, function (props) {
    return props.selected
        ? props.theme.buttons.primary.selected.text
        : props.theme.buttons.primary.static.text;
}, function (props) {
    return props.selected
        ? props.theme.buttons.primary.selected.border
        : props.theme.buttons.primary.static.border;
}, function (props) { return props.theme.buttons.primary.static.shadow; }, function (props) { return props.theme.buttons.primary.focus.bgd; }, function (props) { return props.theme.buttons.primary.focus.border; }, function (props) { return props.theme.buttons.primary.focus.text; }, function (props) { return props.theme.buttons.primary.focus.shadow; }, function (props) { return props.theme.buttons.primary.hover.bgd; }, function (props) { return props.theme.buttons.primary.hover.border; }, function (props) { return props.theme.buttons.primary.hover.text; }, function (props) { return props.theme.buttons.primary.hover.shadow; }, function (props) { return props.theme.buttons.primary.focus.shadow; }, function (props) { return props.theme.buttons.primary.active.bgd; }, function (props) { return props.theme.buttons.primary.active.border; }, function (props) { return props.theme.buttons.primary.active.text; }, function (props) { return props.theme.buttons.primary.active.shadow; }, function (props) { return props.theme.buttons.primary.disabled.bgd; }, function (props) { return props.theme.buttons.primary.disabled.border; }, function (props) { return props.theme.buttons.primary.disabled.text; });
export var StyledSecondaryButton = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  box-shadow: ", ";\n\n  &:focus {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:focus:hover {\n    box-shadow: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  background-color: ",
    ";\n  color: ",
    ";\n  border: ",
    ";\n  box-shadow: ", ";\n\n  &:focus {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:focus:hover {\n    box-shadow: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
    return props.selected
        ? props.theme.buttons.secondary.selected.bgd
        : props.theme.buttons.secondary.static.bgd;
}, function (props) {
    return props.selected
        ? props.theme.buttons.secondary.selected.text
        : props.theme.buttons.secondary.static.text;
}, function (props) {
    return props.selected
        ? props.theme.buttons.secondary.selected.border
        : props.theme.buttons.secondary.static.border;
}, function (props) { return props.theme.buttons.secondary.shadow; }, function (props) { return props.theme.buttons.secondary.focus.bgd; }, function (props) { return props.theme.buttons.secondary.focus.border; }, function (props) { return props.theme.buttons.secondary.focus.text; }, function (props) { return props.theme.buttons.secondary.focus.shadow; }, function (props) { return props.theme.buttons.secondary.hover.bgd; }, function (props) { return props.theme.buttons.secondary.hover.border; }, function (props) { return props.theme.buttons.secondary.hover.text; }, function (props) { return props.theme.buttons.secondary.hover.shadow; }, function (props) { return props.theme.buttons.secondary.focus.shadow; }, function (props) { return props.theme.buttons.secondary.active.bgd; }, function (props) { return props.theme.buttons.secondary.active.border; }, function (props) { return props.theme.buttons.secondary.active.text; }, function (props) { return props.theme.buttons.secondary.focus.shadow; }, function (props) { return props.theme.buttons.secondary.disabled.bgd; }, function (props) { return props.theme.buttons.secondary.disabled.border; }, function (props) { return props.theme.buttons.secondary.disabled.text; });
export var StyledIconButton = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  padding: 0.1875rem;\n  position: relative;\n\n  > .ch-label {\n    ", ";\n  }\n\n  > .ch-icon {\n    width: ", ";\n    height: ", ";\n    margin: 0;\n  }\n\n  &:focus {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    color: ", ";\n    box-shadow: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  background-color: ",
    ";\n  color: ",
    ";\n  border: ",
    ";\n  border-radius: ", ";\n  padding: 0.1875rem;\n  position: relative;\n\n  > .ch-label {\n    ", ";\n  }\n\n  > .ch-icon {\n    width: ", ";\n    height: ", ";\n    margin: 0;\n  }\n\n  &:focus {\n    background-color: ",
    ";\n    border: ", ";\n    color: ", ";\n    color: ",
    ";\n    box-shadow: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
    return props.selected
        ? props.theme.buttons.icon.selected.bgd
        : props.theme.buttons.icon.static.bgd;
}, function (props) {
    return props.selected
        ? props.theme.buttons.icon.selected.text
        : props.theme.buttons.icon.static.text;
}, function (props) {
    return props.selected
        ? props.theme.buttons.icon.selected.border
        : props.theme.buttons.icon.static.border;
}, function (props) { return props.theme.radii.circle; }, visuallyHidden, function (props) { return props.theme.iconButtonSizes[props.iconSize || 'sm']; }, function (props) { return props.theme.iconButtonSizes[props.iconSize || 'sm']; }, function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return selected
        ? theme.buttons.icon.selected.bgd
        : theme.buttons.icon.static.bgd;
}, function (props) { return props.theme.buttons.icon.focus.border; }, function (props) { return props.theme.buttons.icon.focus.text; }, function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return selected
        ? theme.buttons.icon.selected.text
        : theme.buttons.icon.static.text;
}, function (props) { return props.theme.buttons.icon.focus.shadow; }, function (props) { return props.theme.buttons.icon.hover.bgd; }, function (props) { return props.theme.buttons.icon.hover.border; }, function (props) { return props.theme.buttons.icon.hover.text; }, function (props) { return props.theme.buttons.icon.active.bgd; }, function (props) { return props.theme.buttons.icon.active.border; }, function (props) { return props.theme.buttons.icon.active.text; }, function (props) { return props.theme.buttons.icon.disabled.bgd; }, function (props) { return props.theme.buttons.icon.disabled.border; }, function (props) { return props.theme.buttons.icon.disabled.text; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Styled.js.map