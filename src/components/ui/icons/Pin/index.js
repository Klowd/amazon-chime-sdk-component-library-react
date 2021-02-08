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
var Pin = function (_a) {
    var unpin = _a.unpin, rest = __rest(_a, ["unpin"]);
    return (React.createElement(Svg, __assign({}, rest), unpin ? (React.createElement("path", { d: "M4.147 4.146c.195-.195.51-.195.707 0L14.707 14l.979.979 4.168 4.167c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.353-.146L14.293 15h-1.791v3.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5V15H8.474c-.583 0-1.096-.324-1.337-.845-.236-.507-.156-1.089.206-1.518l.977-1.157c.425-.47.58-1.151.604-1.849L4.147 4.854c-.196-.196-.196-.512 0-.708zM14.046 5c.01 0 .02.005.03.005.505.018.969.266 1.246.681.28.418.332.942.14 1.405 0 .005-1.024 3.009.212 4.376l.988 1.17c.363.428.442 1.01.206 1.518-.061.134-.141.253-.234.357l-.712-.71c.02-.028.032-.053.039-.067.034-.073.097-.264-.062-.452l-.978-1.157c-1.623-1.796-.444-5.244-.392-5.39.074-.183.056-.353-.038-.494-.103-.154-.272-.242-.464-.242H9.979c-.193 0-.362.088-.465.242-.094.141-.111.311-.047.468.018.05.133.388.244.88L8.446 6.324c.03-.223.106-.442.237-.638.287-.43.77-.686 1.296-.686zm-4.223 5.53c-.117.587-.337 1.151-.75 1.608l-.966 1.144c-.16.188-.097.379-.063.452.028.062.146.266.43.266h4.819z" })) : (React.createElement("path", { d: "M15.959 13.734c-.028.062-.146.266-.431.266H8.472c-.285 0-.402-.204-.431-.266-.033-.073-.096-.264.064-.452l.965-1.144c1.634-1.809.455-5.257.394-5.429-.065-.156-.047-.326.047-.467.103-.154.272-.242.465-.242h4.048c.193 0 .362.088.465.242.094.141.112.311.037.493-.051.146-1.23 3.594.393 5.39l.978 1.157c.159.187.096.38.062.452m.7-1.098l-.987-1.169c-1.236-1.368-.212-4.372-.212-4.376.19-.462.14-.987-.14-1.404-.278-.417-.741-.665-1.246-.682-.011 0-.02-.005-.03-.005H9.976c-.525 0-1.01.256-1.296.687-.28.417-.331.942-.15 1.378.293.838.828 3.263-.213 4.415l-.976 1.156c-.363.43-.443 1.012-.206 1.52.24.52.754.844 1.337.844H11.5v3.5c0 .276.224.5.5.5s.5-.224.5-.5V15h3.028c.583 0 1.096-.325 1.338-.845.236-.508.156-1.09-.206-1.519" }))));
};
Pin.displayName = 'Pin';
export default Pin;
//# sourceMappingURL=index.js.map