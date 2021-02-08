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
import { StyledGroup, StyledGroupWrapper, StyledTitle } from './Styled';
import Badge from '../Badge';
import Flex from '../Flex';
import React from 'react';
export var RosterGroup = function (_a) {
    var tag = _a.tag, title = _a.title, badge = _a.badge, className = _a.className, children = _a.children, rest = __rest(_a, ["tag", "title", "badge", "className", "children"]);
    return (React.createElement(StyledGroupWrapper, __assign({ as: tag, className: className || '' }, rest),
        title && (React.createElement(Flex, { alignItems: "center", pl: ".5rem", mb: ".5rem" },
            React.createElement(StyledTitle, null, title),
            typeof badge === 'number' && badge > -1 && React.createElement(Badge, { value: badge }))),
        React.createElement(StyledGroup, null, children)));
};
export default RosterGroup;
//# sourceMappingURL=RosterGroup.js.map