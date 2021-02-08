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
import Badge from '../../Badge';
import Button from '../../Button';
import { Dots } from '../../icons';
import PopOver from '../../PopOver';
import { StyledChannelItem } from './Styled';
import classnames from 'classnames';
export var ChannelItem = function (props) {
    var name = props.name, actions = props.actions, isSelected = props.isSelected, onClick = props.onClick, unread = props.unread, unreadBadgeLabel = props.unreadBadgeLabel;
    return (React.createElement(StyledChannelItem, __assign({}, props, { className: classnames({ 'ch-selected': isSelected, 'ch-unread': unread }) }),
        React.createElement(Button, { className: "ch-channel-button", label: name, onClick: onClick }),
        unread && unreadBadgeLabel && (React.createElement(Badge, { value: unreadBadgeLabel, className: "ch-unread-badge" })),
        actions && isSelected && (React.createElement(PopOver, { a11yLabel: "Open channel options", placement: "bottom-end", renderButton: function (isOpen) { return (React.createElement(Dots, { width: "1.5rem", height: "1.5rem", className: (isOpen ? 'isOpen' : '') + " ch-channel-actions", "data-testid": "channel-actions" })); }, children: actions }))));
};
export default ChannelItem;
//# sourceMappingURL=ChannelItem.js.map