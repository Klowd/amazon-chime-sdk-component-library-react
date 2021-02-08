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
import { StyledChatBubbleContainer, StyledChatBubbleInfo } from './Styled';
import { Dots } from '../../icons';
import PopOver from '../../PopOver';
export var ChatBubbleContainer = function (props) {
    var timestamp = props.timestamp, actions = props.actions, rest = __rest(props, ["timestamp", "actions"]);
    return (React.createElement(StyledChatBubbleContainer, __assign({ "data-testid": "chat-bubble-container", actions: actions }, rest),
        props.children,
        React.createElement(StyledChatBubbleInfo, null,
            timestamp && (React.createElement("span", { className: "ch-timestamp", "data-testid": "message-time" }, timestamp)),
            actions && (React.createElement(PopOver, { a11yLabel: "Open channel options", placement: "bottom-end", renderButton: function (isOpen) { return (React.createElement(Dots, { width: "1.5rem", height: "1.5rem", className: (isOpen ? 'isOpen' : '') + " ch-message-actions" })); }, children: actions })))));
};
export default ChatBubbleContainer;
//# sourceMappingURL=ChatBubbleContainer.js.map