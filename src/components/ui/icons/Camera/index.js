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
var Camera = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, rest = __rest(_a, ["disabled"]);
    return (React.createElement(Svg, __assign({}, rest), disabled ? (React.createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M4.146 4.146c.196-.195.512-.195.708 0L7.707 7h.007l1 1h-.007L15 14.293v-.007l.894.894-.001.006 3.961 3.96c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146l-3.747-3.748c-.459.542-1.134.894-1.899.894h-7C5.121 17 4 15.879 4 14.5v-5c0-1.314 1.022-2.383 2.312-2.481L4.146 4.854c-.195-.196-.195-.512 0-.708zM7.293 8H6.5C5.673 8 5 8.673 5 9.5v5c0 .827.673 1.5 1.5 1.5h7c.488 0 .919-.238 1.192-.601L7.293 8zM13.5 7C14.879 7 16 8.121 16 9.5v.566l1.813-1.303c.426-.306.983-.349 1.456-.107.451.231.731.684.731 1.181v4.326c0 .497-.28.95-.731 1.181-.205.104-.424.156-.642.156-.287 0-.571-.089-.814-.263l-1.592-1.144L15 12.873V9.5c0-.827-.673-1.5-1.5-1.5h-3.372l-1-1zm5.313 2.546c-.051-.026-.233-.1-.416.03l-2.256 1.621c-.089.064-.141.16-.141.262v1.082c0 .102.051.197.141.262l2.256 1.622c.182.131.365.054.416.03.055-.029.187-.116.187-.292V9.837c0-.176-.132-.263-.187-.29z" })) : (React.createElement("path", { d: "M19 14.164c0 .176-.131.262-.187.29-.052.027-.234.1-.416-.028l-2.256-1.622v-.001c-.09-.064-.141-.16-.141-.262v-1.082c0-.102.051-.197.141-.262l2.255-1.622c.081-.057.159-.075.227-.075.09 0 .16.03.19.046.056.029.187.115.187.29v4.328zm-4 .336c0 .828-.673 1.5-1.5 1.5h-7c-.827 0-1.5-.672-1.5-1.5v-5C5 8.673 5.673 8 6.5 8h7c.827 0 1.5.673 1.5 1.5v5zm4.27-5.843c-.471-.242-1.028-.202-1.457.106L16 10.066V9.5C16 8.122 14.879 7 13.5 7h-7C5.121 7 4 8.122 4 9.5v5C4 15.879 5.121 17 6.5 17h7c1.379 0 2.5-1.121 2.5-2.5v-.566l1.814 1.304c.243.174.527.262.813.262.219 0 .438-.051.643-.156.45-.231.73-.683.73-1.18V9.837c0-.497-.28-.95-.73-1.18z" }))));
};
Camera.displayName = 'Camera';
export default Camera;
//# sourceMappingURL=index.js.map