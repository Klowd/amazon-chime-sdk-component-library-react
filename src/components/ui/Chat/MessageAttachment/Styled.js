// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../../Base';
import styled from 'styled-components';
export var StyledMessageAttachmentContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: ", ";\n  letter-spacing: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  & .attachment-icon {\n    height: 2rem;\n    width: 2rem;\n    margin: auto;\n    background-color: ", ";\n    border-radius: 25px;\n\n    & .document-icon {\n      margin: auto 0;\n      color: ", ";\n    }\n  }\n  & .attachment-name {\n    margin-left: 1rem;\n\n    & a:link,\n    a:visited,\n    a:hover,\n    a:active {\n      color: ", ";\n      text-decoration: none;\n    }\n  }\n  & .attachment-size {\n    font-size: ", ";\n    color: ", ";\n    display: block;\n    padding-top: 3px;\n  }\n\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: ", ";\n  letter-spacing: ",
    ";\n  font-size: ", ";\n  line-height: ", ";\n\n  & .attachment-icon {\n    height: 2rem;\n    width: 2rem;\n    margin: auto;\n    background-color: ", ";\n    border-radius: 25px;\n\n    & .document-icon {\n      margin: auto 0;\n      color: ", ";\n    }\n  }\n  & .attachment-name {\n    margin-left: 1rem;\n\n    & a:link,\n    a:visited,\n    a:hover,\n    a:active {\n      color: ", ";\n      text-decoration: none;\n    }\n  }\n  & .attachment-size {\n    font-size: ", ";\n    color: ", ";\n    display: block;\n    padding-top: 3px;\n  }\n\n  ", "\n  ", "\n"])), function (props) { return props.theme.messageAttachment.content.fontColor; }, function (props) { return props.theme.messageAttachment.content.bgd; }, function (props) {
    return props.theme.messageAttachment.content.letterSpacing;
}, function (props) { return props.theme.fontSizes.text.fontSize; }, function (props) { return props.theme.fontSizes.text.lineHeight; }, function (props) { return props.theme.messageAttachment.icon.bgd; }, function (props) { return props.theme.messageAttachment.icon.color; }, function (props) { return props.theme.messageAttachment.name.fontColor; }, function (props) { return props.theme.messageAttachment.size.fontSize; }, function (props) { return props.theme.messageAttachment.size.fontColor; }, baseSpacing, baseStyles);
var templateObject_1;
//# sourceMappingURL=Styled.js.map