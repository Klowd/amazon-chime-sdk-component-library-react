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
import Svg from '../Svg';
import React from 'react';
import { StyledCircle } from './Styled';
var HandRaise = function (_a) {
    var isRaised = _a.isRaised, rest = __rest(_a, ["isRaised"]);
    return (React.createElement(Svg, __assign({}, rest),
        isRaised && React.createElement(StyledCircle, { id: "Circle", cx: "12", cy: "12", r: "10" }),
        React.createElement("path", { d: "M6.386 12.04c-.11 0-.218.055-.317.163-.156.17-.05.694.213 1.059l1.804 2.467c.026.038.763 1.175 1.947 1.933.626.399 3.462 1.309 5.433-.303.76-.621 1.161-1.924 1.161-3.772V8.326c0-.388-.233-.728-.5-.728-.27 0-.5.334-.5.728v3.053c0 .276-.223.5-.5.5-.276 0-.5-.224-.5-.5V6.386c0-.343-.228-.632-.5-.632-.27 0-.5.289-.5.632v4.935c0 .277-.223.5-.5.5-.276 0-.5-.223-.5-.5V5.633c0-.343-.228-.633-.5-.633-.275 0-.5.284-.5.633v5.618c0 .276-.223.5-.5.5-.276 0-.5-.224-.5-.5v-4.19c0-.395-.228-.729-.5-.729-.27 0-.5.334-.5.729v6.824c0 .276-.223.5-.5.5-.138 0-.33-.058-.425-.158l-1.356-1.452c-.367-.469-.7-.724-.946-.735h-.014zm6.29 7.251c-1.42 0-2.667-.458-3.182-.787-1.376-.88-2.199-2.157-2.233-2.211L5.474 13.85c-.487-.673-.7-1.714-.142-2.323.303-.33.693-.51 1.11-.486.562.023 1.123.389 1.664 1.086l.521.557V7.061c0-.954.673-1.729 1.5-1.729.18 0 .352.036.511.104.09-.808.724-1.436 1.49-1.436.59 0 1.103.374 1.347.916.197-.104.42-.162.652-.162.827 0 1.5.732 1.5 1.632v.31c.156-.063.325-.098.5-.098.827 0 1.5.775 1.5 1.728v5.261c0 2.188-.514 3.718-1.528 4.547-1.064.869-2.298 1.157-3.424 1.157z", fill: isRaised ? 'white' : '' })));
};
HandRaise.displayName = 'HandRaise';
export default HandRaise;
//# sourceMappingURL=index.js.map