// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyledFlex } from './Styled';
export var Flex = function (_a) {
    var children = _a.children, className = _a.className, tag = _a.tag, _b = _a.alignItems, alignItems = _b === void 0 ? 'stretch' : _b, _c = _a.container, container = _c === void 0 ? false : _c, _d = _a.flexBasis, flexBasis = _d === void 0 ? 'auto' : _d, _e = _a.flexDirection, flexDirection = _e === void 0 ? 'row' : _e, _f = _a.flexShrink, flexShrink = _f === void 0 ? 1 : _f, _g = _a.flexWrap, flexWrap = _g === void 0 ? 'nowrap' : _g, _h = _a.justifyContent, justifyContent = _h === void 0 ? 'flex-start' : _h, props = __rest(_a, ["children", "className", "tag", "alignItems", "container", "flexBasis", "flexDirection", "flexShrink", "flexWrap", "justifyContent"]);
    return (React.createElement(StyledFlex, __assign({ alignItems: alignItems, container: container, flexBasis: flexBasis, flexDirection: flexDirection, flexShrink: flexShrink, flexWrap: flexWrap, justifyContent: justifyContent, as: tag, "data-testid": "flex", className: className || '' }, props), children));
};
export default Flex;
//# sourceMappingURL=index.js.map