// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import styled from 'styled-components';
export var StyledHeading = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin: 0;\n\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n\n  ", " {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height:  ", ";\n  };\n\n  ", "\n  ", "\n"], ["\n  display: block;\n  margin: 0;\n\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n\n  ", " {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height:  ", ";\n  };\n\n  ", "\n  ", "\n"])), function (props) { return props.theme.fontSizes["h" + props.level].mobile.fontSize; }, function (props) { return props.theme.fontSizes["h" + props.level].mobile.fontWeight; }, function (props) { return props.theme.fontSizes["h" + props.level].mobile.lineHeight; }, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.min.md;
}, function (props) { return props.theme.fontSizes["h" + props.level].fontSize; }, function (props) { return props.theme.fontSizes["h" + props.level].fontWeight; }, function (props) { return props.theme.fontSizes["h" + props.level].lineHeight; }, baseSpacing, baseStyles);
var templateObject_1;
//# sourceMappingURL=Styled.js.map