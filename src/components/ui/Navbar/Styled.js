// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import Flex from '../Flex';
import styled from 'styled-components';
export var StyledNavbar = styled(Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 20rem;\n  max-width: 100%;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    width: 4.25rem;\n    padding-left: 0;\n  }\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 20rem;\n  max-width: 100%;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    width: 4.25rem;\n    padding-left: 0;\n  }\n\n  ", "\n  ", "\n"])), function (props) { return props.theme.navbar.text; }, function (_a) {
    var theme = _a.theme;
    return theme.navbar.bgd;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.min.md;
}, baseStyles, baseSpacing);
export var StyledNavbarItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 3rem;\n\n  ", " {\n    margin-left: 0.5rem;\n\n    .ch-navigation-bar-item-label {\n      margin-left: 0.625rem;\n    }\n  }\n\n  ", " {\n    .ch-navigation-bar-item-label {\n      display: none;\n    }\n    margin-left: 0.5rem;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  height: 3rem;\n\n  ", " {\n    margin-left: 0.5rem;\n\n    .ch-navigation-bar-item-label {\n      margin-left: 0.625rem;\n    }\n  }\n\n  ", " {\n    .ch-navigation-bar-item-label {\n      display: none;\n    }\n    margin-left: 0.5rem;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.max.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.min.md;
});
export var StyledHeader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  height: 3rem;\n  align-items: center;\n  border-bottom: 0.03125rem solid ", ";\n  padding: 1rem;\n\n  .ch-btn-close {\n    margin-left: auto;\n    margin-right: 1rem;\n  }\n\n  ", " {\n    display: none;\n  }\n"], ["\n  display: flex;\n  height: 3rem;\n  align-items: center;\n  border-bottom: 0.03125rem solid ", ";\n  padding: 1rem;\n\n  .ch-btn-close {\n    margin-left: auto;\n    margin-right: 1rem;\n  }\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.navbar.headerBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.min.md;
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Styled.js.map