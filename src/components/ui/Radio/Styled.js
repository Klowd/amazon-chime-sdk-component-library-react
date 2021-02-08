// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { absoluteCenter, visuallyHidden } from '../../../utils/style';
import styled from 'styled-components';
export var HiddenRadio = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  &[aria-invalid='true'] + .ch-radio {\n    border: ", ";\n    box-shadow: ", ";\n  }\n"], ["\n  ", ";\n\n  &[aria-invalid='true'] + .ch-radio {\n    border: ", ";\n    box-shadow: ", ";\n  }\n"])), visuallyHidden, function (props) { return props.theme.inputs.error.border; }, function (props) { return props.theme.inputs.error.shadow; });
export var StyledRadioWrapper = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  > label {\n    margin-left: 0.5rem;\n  }\n"], ["\n  > label {\n    margin-left: 0.5rem;\n  }\n"])));
export var StyledRadio = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  margin-bottom: -0.1875rem;\n  transition: box-shadow 0.05s ease-in;\n\n  ", ":checked ~ & {\n    background-color: ", ";\n    border: ", ";\n    box-shadow: ", ";\n  }\n\n  ", ":focus ~ & {\n    border: ", ";\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  margin-bottom: -0.1875rem;\n  transition: box-shadow 0.05s ease-in;\n\n  ", ":checked ~ & {\n    background-color: ", ";\n    border: ", ";\n    box-shadow: ", ";\n  }\n\n  ", ":focus ~ & {\n    border: ", ";\n    box-shadow: ", ";\n  }\n"])), function (props) { return props.theme.inputs.bgd; }, function (props) { return props.theme.inputs.border; }, function (props) { return props.theme.radii.circle; }, function (props) { return props.theme.inputs.shadow; }, HiddenRadio, function (props) { return props.theme.inputs.checked.bgd; }, function (props) { return props.theme.inputs.checked.border; }, function (props) { return props.theme.inputs.checked.shadow; }, HiddenRadio, function (props) { return props.theme.inputs.focus.border; }, function (props) { return props.theme.inputs.focus.shadow; });
export var StyledRadioLabel = styled(StyledRadio)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  height: 1rem;\n  position: relative;\n  width: 1rem;\n\n  &:after {\n    background-color: ", ";\n    border-radius: ", ";\n    content: '';\n    display: block;\n    height: 0.375rem;\n    padding: 0.03125rem;\n    width: 0.375rem;\n    ", ";\n  }\n"], ["\n  display: inline-block;\n  height: 1rem;\n  position: relative;\n  width: 1rem;\n\n  &:after {\n    background-color: ",
    ";\n    border-radius: ", ";\n    content: '';\n    display: block;\n    height: 0.375rem;\n    padding: 0.03125rem;\n    width: 0.375rem;\n    ", ";\n  }\n"])), function (props) {
    return props.checked
        ? props.theme.inputs.checked.fontColor
        : props.theme.inputs.bgd;
}, function (props) { return props.theme.radii.circle; }, absoluteCenter);
export var StyledRadioIcon = styled(StyledRadio)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border-color: ", ";\n  box-shadow: none;\n  margin: 0.1rem;\n\n  ", ":checked ~ & {\n    svg {\n      stroke: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border-color: ", ";\n  box-shadow: none;\n  margin: 0.1rem;\n\n  ", ":checked ~ & {\n    svg {\n      stroke: ", ";\n    }\n  }\n"])), function (props) { return props.theme.colors.greys.white; }, HiddenRadio, function (props) { return props.theme.colors.greys.white; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Styled.js.map