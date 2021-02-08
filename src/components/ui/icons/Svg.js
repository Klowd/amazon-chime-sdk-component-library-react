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
var Svg = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.viewBox, viewBox = _b === void 0 ? '0 0 24 24' : _b, _c = _a.xmlns, xmlns = _c === void 0 ? 'http://www.w3.org/2000/svg' : _c, width = _a.width, height = _a.height, title = _a.title, otherProps = __rest(_a, ["className", "children", "viewBox", "xmlns", "width", "height", "title"]);
    // This is necessary because some versions of Firefox would not use rems as values
    // for width and height attributes: https://bugzilla.mozilla.org/show_bug.cgi?id=1231147
    var styles = {
        width: width,
        height: height
    };
    return (React.createElement("svg", __assign({ xmlns: xmlns, className: "Svg " + (className || ''), height: height, style: styles, viewBox: viewBox, width: width }, otherProps),
        title && React.createElement("title", null, title),
        React.createElement("g", { fillRule: "evenodd", fill: "currentColor" }, children)));
};
export default Svg;
//# sourceMappingURL=Svg.js.map