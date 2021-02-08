// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
// use for elements that contain text for screen readers, but need no visual representation
export var visuallyHidden = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  position: absolute !important;\n"], ["\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  position: absolute !important;\n"])));
export var ellipsis = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"], ["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])));
export var absoluteCenter = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
export var isValidCSSHex = function (hex) {
    // matches 6 digit characters prefixed with a '#'.
    return /^#[0-9A-F]{6}$/i.test(hex);
};
export var hexTorgba = function (hex, alpha) {
    var _a;
    if (alpha === void 0) { alpha = 1; }
    if (!isValidCSSHex(hex)) {
        return '';
    }
    var _b = (_a = hex.match(/\w\w/g)) === null || _a === void 0 ? void 0 : _a.map(function (h) { return parseInt(h, 16); }), r = _b[0], g = _b[1], b = _b[2];
    return "rgba(" + r + ", " + g + ", " + b + ", " + (alpha || 1) + ")";
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=style.js.map