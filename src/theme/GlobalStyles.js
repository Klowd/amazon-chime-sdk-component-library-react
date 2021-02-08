// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { StyledReset } from './StyledReset';
import { createGlobalStyle } from 'styled-components';
export var GlobalStyles = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: ", ";\n    font-family: ", ";;\n    background-color: ", ";\n    color: ", ";\n    min-height: 100%;\n  }\n"], ["\n  ", ";\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: ", ";\n    font-family: ", ";;\n    background-color: ", ";\n    color: ", ";\n    min-height: 100%;\n  }\n"])), StyledReset, function (props) { return props.theme.fontSizes.baseFontSize; }, function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.global.bgd; }, function (props) { return props.theme.global.text; });
export default GlobalStyles;
var templateObject_1;
//# sourceMappingURL=GlobalStyles.js.map