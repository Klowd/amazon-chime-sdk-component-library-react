// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { fadeAnimation } from '../../../utils/animations';
import styled from 'styled-components';
export var StyledUserActivityManager = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: ", ";\n  visibility: ", ";\n\n  &.ch-active {\n    animation: ", " 0.25s ease 0s forwards;\n  }\n"], ["\n  z-index: ", ";\n  visibility: ", ";\n\n  &.ch-active {\n    animation: ", " 0.25s ease 0s forwards;\n  }\n"])), function (props) { return (props.isActive ? props.theme.zIndex.controlBar : '-10'); }, function (props) { return (props.isActive ? 'visible' : 'hidden'); }, fadeAnimation);
var templateObject_1;
//# sourceMappingURL=Styled.js.map