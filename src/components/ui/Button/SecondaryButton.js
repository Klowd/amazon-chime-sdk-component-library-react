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
import Button from './';
import React, { forwardRef } from 'react';
export var SecondaryButton = forwardRef(function (props, ref) { return (React.createElement(Button, __assign({ variant: 'secondary' }, props))); });
export default SecondaryButton;
//# sourceMappingURL=SecondaryButton.js.map