// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
var defaultStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ch-caution-background {\n    fill: transparent;\n  }\n"], ["\n  .ch-caution-background {\n    fill: transparent;\n  }\n"])));
var warningStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .ch-caution-background {\n    fill: ", ";\n  }  \n\n  .ch-caution-exclamation {\n    fill: ", ";\n  }  \n\n  .ch-caution-border {\n    fill: ", ";\n  }  \n"], ["\n  .ch-caution-background {\n    fill: ", ";\n  }  \n\n  .ch-caution-exclamation {\n    fill: ", ";\n  }  \n\n  .ch-caution-border {\n    fill: ", ";\n  }  \n"])), function (props) { return props.theme.colors.warning.primary; }, function (props) { return props.theme.colors.greys.white; }, function (props) { return props.theme.colors.warning.primary; });
var errorStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  .ch-caution-background {\n    fill: ", ";\n  }  \n\n  .ch-caution-exclamation {\n    fill: ", ";\n  }  \n\n  .ch-caution-border {\n    fill: ", ";\n  }  \n"], ["\n  .ch-caution-background {\n    fill: ", ";\n  }  \n\n  .ch-caution-exclamation {\n    fill: ", ";\n  }  \n\n  .ch-caution-border {\n    fill: ", ";\n  }  \n"])), function (props) { return props.theme.colors.error.primary; }, function (props) { return props.theme.colors.greys.white; }, function (props) { return props.theme.colors.error.primary; });
var variantMap = {
    "default": defaultStyle,
    "fill-warning": warningStyle,
    "fill-error": errorStyle,
};
export var StyledCaution = styled.g(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\n  ", ";\n\n"], ["\n\n  ", ";\n\n"])), function (props) { return variantMap[props.variant || 'default']; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map