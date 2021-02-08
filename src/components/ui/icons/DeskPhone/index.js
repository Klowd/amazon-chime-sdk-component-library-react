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
var DeskPhone = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.poorConnection, poorConnection = _c === void 0 ? false : _c, rest = __rest(_a, ["disabled", "poorConnection"]);
    return (React.createElement(Svg, __assign({}, rest), poorConnection ? (disabled ? (React.createElement("path", { d: "M4.146 4.147c.196-.196.512-.196.707 0l15 15c.196.195.196.511 0 .707-.097.097-.225.146-.353.146-.128 0-.256-.049-.354-.146l-.938-.939c-.13.051-.266.085-.413.085h-.125v-.623L16.293 17H16v-.294l-1.628-1.628H14v-.372L12.293 13H12v-.294l-1-1v4.138C11 16.482 10.48 17 9.843 17H8.156C7.52 17 7 16.482 7 15.844V7.706L6.293 7h-.058c-.08 0-.138.06-.152.12l-.973-.235c.065-.266.218-.488.422-.645L4.146 4.854c-.195-.196-.195-.512 0-.707zm1.858 13.734c.014.06.071.12.152.12h.125v1h-.125c-.537 0-.999-.365-1.125-.886zM8.263 18v1h-1v-1h1zm2.106 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.106 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm-3.69-2v1h-1v-1h1zM15 16v1h-1.001v-1H15zm-9 0v1H5v-1h1zm13 0v.907L18.093 16H19zM8 8.706v7.138c0 .086.07.156.156.156h1.687c.086 0 .156-.07.156-.156v-5.138l-2-2zm4.999 5.372v1.001h-1v-1.001h1zM19 14v1h-1v-1h1zM6 14v1H5v-1h1zm11 .078v.828l-.829-.828H17zM17 12v1.001h-1V12h1zm2 0v1h-1v-1h1zM6 12v1H5v-1h1zm9 0v.906L14.092 12H15zM9.843 5C10.48 5 11 5.52 11 6.156V8h5.172c.457 0 .828.372.828.83v1.341c0 .457-.371.83-.828.83h-3.078l-1-1H16V9h-4.906L10 7.905v-1.75C10 6.07 9.929 6 9.844 6H8.157c-.018 0-.03.014-.045.02l-.717-.718C7.599 5.12 7.862 5 8.157 5zM19 10v1h-1v-1h1zM6 10v1H5v-1h1zm13-2v1h-1V8h1zM6 8v1H5V8h1zm11.876-2c.537 0 .999.364 1.125.885l-.973.234c-.014-.06-.071-.119-.152-.119h-.125V6zm-5.321 0v1h-1V6h1zm2.106 0v1h-1V6h1zm2.108 0v1h-1V6h1z" })) : (React.createElement("path", { d: "M6.003 17.882c.012.047.05.095.107.112l.045.007h.125v1h-.125c-.495 0-.927-.311-1.09-.768l-.035-.117.973-.234zM8.262 18v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.107 0v1h-1v-1h1zm2.106 0v1h-1v-1h1zm1.259-.118l.973.234c-.117.48-.52.828-1.003.879l-.122.006h-.125v-1h.125c.08 0 .139-.061.152-.119zM9.843 5c.595 0 1.087.453 1.15 1.032l.007.125v1.844h5.172c.422 0 .77.316.822.725l.006.103v1.342c0 .422-.316.772-.724.823l-.104.007H11v4.843c0 .595-.452 1.087-1.031 1.15L9.843 17H8.156c-.595 0-1.086-.452-1.15-1.03L7 15.842V6.159c0-.596.451-1.088 1.03-1.15L8.156 5h1.687zM6 16v1H5v-1h1zm13 0v1h-1v-1h1zm-6.001 0v1h-1v-1h1zM15 16v1h-1v-1h1zm2 0v1h-1v-1h1zM9.843 6H8.156c-.069 0-.127.045-.148.108L8 6.158v9.685c0 .07.045.129.107.15l.049.007h1.687c.069 0 .128-.045.149-.107l.008-.05V6.159C10 6.07 9.929 6 9.843 6zm3.156 8.079v1h-1v-1h1zm2.001 0v1h-1v-1h1zm2 0v1h-1v-1h1zM6 14v1H5v-1h1zm13 0v1h-1v-1h1zM6 12.003v1H5v-1h1zm13 0v1h-1v-1h1zM12.999 12v1h-1v-1h1zM15 12v1h-1v-1h1zm2 0v1h-1v-1h1zM6 10.003v1H5v-1h1zm13 0v1h-1v-1h1zM16 9h-5v1h5V9zm3-1v1h-1V8h1zM6 8v1H5V8h1zm.361-2v1h-.125c-.065 0-.115.039-.139.084l-.013.036-.973-.234c.116-.481.519-.828 1.003-.879l.122-.006h.125zm11.514.001c.496 0 .927.31 1.09.768l.035.117-.973.234c-.011-.049-.05-.096-.106-.112L17.875 7h-.125v-1h.125zm-5.32 0v1h-1V6h1zm2.107 0v1h-1V6h1zm2.106 0v1h-1V6h1z" }))) : disabled ? (React.createElement("path", { d: "M4.146 4.146c.196-.195.512-.195.707 0l15 15c.196.196.196.512 0 .708-.097.097-.225.146-.353.146-.128 0-.256-.049-.354-.146l-.923-.923c-.119.042-.245.069-.379.069H6.156C5.518 19 5 18.481 5 17.844V7.156c0-.394.211-.726.513-.935L4.146 4.854c-.195-.196-.195-.512 0-.708zM6.293 7h-.137C6.07 7 6 7.07 6 7.156v10.688c0 .086.07.156.156.156h11.137l-1-1H16v-.293l-1.629-1.629h-.37v-.371L12.292 13H12v-.293l-1-1v4.137C11 16.481 10.481 17 9.844 17H8.156C7.518 17 7 16.481 7 15.844V7.707L6.293 7zM13 16v1h-1v-1h1zm2 0v1h-1v-1h1zM9.843 5c.542 0 .979.379 1.103.882L10.97 6h6.875c.595 0 1.086.452 1.15 1.03l.006.126v9.76l-1-1v-8.76c0-.069-.045-.127-.107-.148L17.844 7H11v1h5.171c.422 0 .771.317.823.725L17 8.83v1.342c0 .422-.317.771-.725.823l-.104.006h-3.087l-1-1H16V9h-4.916L10 7.916v-1.76c0-.069-.045-.127-.107-.148L9.843 6H8.156l-.026.008-.025.013-.716-.716c.171-.153.384-.263.621-.295L8.156 5h1.687zM8 8.707v7.137c0 .086.07.156.156.156h1.688c.085 0 .156-.07.156-.156v-5.137l-2-2zm5 5.371v1h-1v-1h1zm4 0v.837l-.838-.837H17zM17 12v1h-1v-1h1zm-2 0v.916L14.084 12H15z" })) : (React.createElement("path", { d: "M9.844 5c.582 0 1.045.44 1.125 1h6.875C18.481 6 19 6.519 19 7.157v10.687c0 .638-.519 1.156-1.156 1.156H6.156C5.519 19 5 18.482 5 17.844V7.157C5 6.519 5.519 6 6.156 6h.875c.08-.56.543-1 1.125-1zM7 7h-.844C6.07 7 6 7.07 6 7.157v10.687c0 .086.07.156.156.156h11.688c.086 0 .156-.07.156-.156V7.157C18 7.07 17.93 7 17.844 7H11v1h5.171c.457 0 .829.372.829.829v1.343c0 .457-.372.828-.829.828H11v4.844C11 16.482 10.481 17 9.844 17H8.156C7.519 17 7 16.482 7 15.844V7zm6 9v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM9.844 6H8.156C8.07 6 8 6.07 8 6.157v9.687c0 .086.07.156.156.156h1.688c.086 0 .156-.07.156-.156V6.157C10 6.07 9.93 6 9.844 6zM13 14.078v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM13 12v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm-1-3h-5v1h5V9z" }))));
};
DeskPhone.displayName = 'DeskPhone';
export default DeskPhone;
//# sourceMappingURL=index.js.map