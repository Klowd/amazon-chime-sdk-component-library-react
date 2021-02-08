// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseStyles } from '../Base';
import styled from 'styled-components';
export var StyledMicVolumeIndicator = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: inherit;\n  line-height: 0;\n\n  ", "\n\n  .ch-mic-icon {\n    position: relative;\n    z-index: 2;\n    width: 100%;\n  }\n\n  .ch-bg-volume-wrapper {\n    position: absolute;\n    bottom: 41%;\n    left: 40%;\n    height: 38%;\n    width: 21%;\n    border-radius: 20%;\n    overflow: hidden;\n  }\n\n  .ch-bg-volume-fill {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transform-origin: bottom;\n    will-change: transform;\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  height: inherit;\n  line-height: 0;\n\n  ", "\n\n  .ch-mic-icon {\n    position: relative;\n    z-index: 2;\n    width: 100%;\n  }\n\n  .ch-bg-volume-wrapper {\n    position: absolute;\n    bottom: 41%;\n    left: 40%;\n    height: 38%;\n    width: 21%;\n    border-radius: 20%;\n    overflow: hidden;\n  }\n\n  .ch-bg-volume-fill {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transform-origin: bottom;\n    will-change: transform;\n    background-color: ",
    ";\n  }\n"])), baseStyles, function (props) {
    return props.signalStrength && props.signalStrength <= 0.5
        ? props.theme.colors.error.light
        : props.theme.colors.primary.light;
});
export default StyledMicVolumeIndicator;
var templateObject_1;
//# sourceMappingURL=Styled.js.map