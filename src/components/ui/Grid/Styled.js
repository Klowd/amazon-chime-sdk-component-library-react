// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import { grid } from 'styled-system';
import styled from 'styled-components';
export var StyledGrid = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: grid;\n  width: 100%;\n  height: 100%;\n\n  ", "\n  ", "\n  ", "\n\n  ",
    "\n\n  ", "\n"])), grid, baseSpacing, baseStyles, function (_a) {
    var responsive = _a.responsive, theme = _a.theme;
    return responsive
        ? "\n    " + theme.mediaQueries.max.md + " {\n      grid-template-columns: 1fr 1fr;\n    }\n\n    " + theme.mediaQueries.max.sm + " {\n      grid-template-columns: 1fr;\n    }\n  "
        : '';
}, function (props) { return props.css || ''; });
export var StyledCell = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  ", "\n"], ["\n  ", "\n  ", "\n\n  ", "\n"])), baseSpacing, grid, function (props) { return props.css || ''; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=Styled.js.map