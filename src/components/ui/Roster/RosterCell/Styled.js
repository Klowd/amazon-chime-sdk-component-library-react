// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../../Base';
import styled from 'styled-components';
export var StyledCell = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 0.625rem 1rem;\n\n  .ch-mic {\n    flex-shrink: 0;\n    width: 1.5rem;\n    line-height: 0;\n\n    ", "\n  }\n\n  .ch-menu {\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      color: ", ";\n    }\n  }\n\n  svg {\n    width: 1.5rem;\n    flex-shrink: 0;\n  }\n\n  > * {\n    margin-right: 0.5rem;\n  }\n\n  > :last-child {\n    margin-right: 0;\n  }\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 0.625rem 1rem;\n\n  .ch-mic {\n    flex-shrink: 0;\n    width: 1.5rem;\n    line-height: 0;\n\n    ",
    "\n  }\n\n  .ch-menu {\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      color: ", ";\n    }\n  }\n\n  svg {\n    width: 1.5rem;\n    flex-shrink: 0;\n  }\n\n  > * {\n    margin-right: 0.5rem;\n  }\n\n  > :last-child {\n    margin-right: 0;\n  }\n\n  ", "\n  ", "\n"])), function (_a) {
    var micPosition = _a.micPosition;
    return micPosition === 'leading'
        ? "\n        order: -1;\n        margin-right: .75rem;\n      "
        : '';
}, function (props) { return props.theme.buttons.icon.hover.bgd; }, function (props) { return props.theme.buttons.icon.hover.text; }, baseSpacing, baseStyles);
export var StyledLateMessage = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.65rem;\n  color: ", ";\n\n  > svg {\n    margin-right: 0.25rem;\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.65rem;\n  color: ", ";\n\n  > svg {\n    margin-right: 0.25rem;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.roster.secondaryText;
}, function (_a) {
    var theme = _a.theme;
    return theme.roster.secondaryText;
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Styled.js.map