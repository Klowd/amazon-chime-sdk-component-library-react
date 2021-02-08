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
import { StyledChatBubble } from './Styled';
;
export var ChatBubble = function (_a) {
    var variant = _a.variant, senderName = _a.senderName, content = _a.content, _b = _a.showName, showName = _b === void 0 ? true : _b, showTail = _a.showTail, redacted = _a.redacted, children = _a.children, rest = __rest(_a, ["variant", "senderName", "content", "showName", "showTail", "redacted", "children"]);
    return (React.createElement(StyledChatBubble, __assign({ variant: variant, editable: false }, rest, { "data-testid": 'chat-bubble' }),
        showName && React.createElement("div", { className: 'ch-sender-name' }, senderName),
        React.createElement("div", null, content),
        children,
        showTail &&
            React.createElement("svg", { viewBox: "0 0 4 9", "data-testid": 'tail' },
                React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("g", { transform: "translate(0, -53)", className: 'ch-chat-bubble-tail' },
                        React.createElement("path", { d: "M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z" }))))));
};
export default ChatBubble;
//# sourceMappingURL=index.js.map