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
import React, { createContext, createRef, useContext } from 'react';
import { StyledGrid } from './Styled';
var gridData = { usingGrid: true };
var GridContext = createContext(null);
export var VideoGrid = function (_a) {
    var size = _a.size, children = _a.children, _b = _a.layout, layout = _b === void 0 ? 'standard' : _b, rest = __rest(_a, ["size", "children", "layout"]);
    var gridEl = createRef();
    var ratio = 'slim'; //useElementAspectRatio(gridEl);
    var gridSize = typeof size === 'number' ? size : React.Children.count(children);
    return (React.createElement(GridContext.Provider, { value: gridData },
        React.createElement(StyledGrid, __assign({ ref: gridEl }, rest, { size: gridSize, ratio: ratio, featured: layout === 'featured', "data-testid": "video-grid" }), children)));
};
export var useGridData = function () {
    var gridData = useContext(GridContext);
    return gridData;
};
export default VideoGrid;
//# sourceMappingURL=index.js.map