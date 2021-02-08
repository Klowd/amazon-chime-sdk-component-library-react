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
import { StyledChannelList } from './Styled';
export var ChannelList = function (props) {
    return (React.createElement(StyledChannelList, __assign({}, props, { "data-testid": "channel-list" }), props.children));
};
export default ChannelList;
//# sourceMappingURL=index.js.map