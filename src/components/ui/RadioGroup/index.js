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
import React from 'react';
import Radio from '../Radio';
export var RadioGroup = function (props) {
    var options = props.options, value = props.value, onChange = props.onChange;
    return (React.createElement(React.Fragment, null, options.map(function (option, index) {
        return (React.createElement(Radio, __assign({ value: option.value, key: option + "-" + index, label: option.label, checked: option.value === value, icon: option.icon, onChange: onChange }, option.inputProps)));
    })));
};
RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
//# sourceMappingURL=index.js.map