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
import Input from './';
import React, { forwardRef } from 'react';
import Search from '../icons/Search';
export var SearchInput = forwardRef(function (props, ref) {
    var searchProps = __assign(__assign({}, props), { sizing: 'sm', type: 'search', leadingIcon: React.createElement(Search, { "data-testid": "search-icon" }) });
    return React.createElement(Input, __assign({}, searchProps, { ref: ref }));
});
export default SearchInput;
//# sourceMappingURL=SearchInput.js.map