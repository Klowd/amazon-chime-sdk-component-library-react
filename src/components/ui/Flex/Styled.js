// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import styled, { css } from 'styled-components';
export var fillSpace = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"])));
export var fillSpaceCentered = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"])), fillSpace);
export var equalColumns = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  align-items: stretch;\n\n  > * {\n    flex-grow: 1;\n    flex-basis: 50%;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  align-items: stretch;\n\n  > * {\n    flex-grow: 1;\n    flex-basis: 50%;\n  }\n"])));
export var stack = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > * {\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > * {\n    width: 100%;\n  }\n"])));
var layoutMap = {
    'fill-space': fillSpace,
    'fill-space-centered': fillSpaceCentered,
    'equal-columns': equalColumns,
    stack: stack
};
export var StyledFlex = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: ", ";\n  display: ", ";\n  flex: ", ";\n  flex-basis: ", ";\n  flex-direction: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  flex-wrap: ", ";\n  justify-content: ", ";\n\n  // layout variants\n  ", "\n\n  ", "\n  ", "\n"], ["\n  align-items: ", ";\n  display: ", ";\n  flex: ", ";\n  flex-basis: ", ";\n  flex-direction: ", ";\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  flex-wrap: ", ";\n  justify-content: ", ";\n\n  // layout variants\n  ", "\n\n  ", "\n  ", "\n"])), function (props) { return props.alignItems; }, function (props) { return (props.container ? 'flex' : 'block'); }, function (props) { return props.flex || ''; }, function (props) { return props.flexBasis; }, function (props) { return props.flexDirection; }, function (props) { return props.flexGrow || ''; }, function (props) { return props.flexShrink; }, function (props) { return props.flexWrap; }, function (props) { return props.justifyContent; }, function (props) { return !!props.layout && layoutMap[props.layout]; }, baseSpacing, baseStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Styled.js.map