// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../../Base';
import styled, { keyframes } from 'styled-components';
// Create the keyframes
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
export var StyledInfiniteList = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n\n  /* disable scrolling while fetching */\n  &.ch-not-scrollable {\n    overflow-y: hidden;\n  }\n\n  ", "\n  ", "\n\n  .ch-spinner {\n    margin: 0 auto;\n  }\n\n  .ch-spinner svg {\n    width: 2rem;\n    height: 2rem;\n    animation: ", " 2s linear infinite;\n    display: block;\n  }\n"], ["\n  background-color: ", ";\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n\n  /* disable scrolling while fetching */\n  &.ch-not-scrollable {\n    overflow-y: hidden;\n  }\n\n  ", "\n  ", "\n\n  .ch-spinner {\n    margin: 0 auto;\n  }\n\n  .ch-spinner svg {\n    width: 2rem;\n    height: 2rem;\n    animation: ", " 2s linear infinite;\n    display: block;\n  }\n"])), function (props) { return props.theme.chatBubble.container.bgd; }, baseSpacing, baseStyles, rotate);
var templateObject_1, templateObject_2;
//# sourceMappingURL=Styled.js.map