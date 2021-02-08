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
import { Camera, Microphone, ScreenShare } from '../../icons';
import LateMessage from './LateMessage';
import { PopOverMenu } from '../PopOverMenu';
import React from 'react';
import RosterName from '../RosterName';
import { StyledCell } from './Styled';
function getVideoIcon(isVideoEnabled, isSharingContent) {
    if (isSharingContent) {
        return React.createElement(ScreenShare, null);
    }
    if (typeof isVideoEnabled === 'boolean') {
        return React.createElement(Camera, { disabled: !isVideoEnabled });
    }
    return null;
}
export var RosterCell = function (props) {
    var tag = props.tag, name = props.name, menu = props.menu, subtitle = props.subtitle, className = props.className, runningLate = props.runningLate, muted = props.muted, videoEnabled = props.videoEnabled, sharingContent = props.sharingContent, _a = props.poorConnection, poorConnection = _a === void 0 ? false : _a, microphone = props.microphone, _b = props.a11yMenuLabel, a11yMenuLabel = _b === void 0 ? '' : _b, extraIcon = props.extraIcon, buttonProps = props.buttonProps;
    var videoIcon = getVideoIcon(videoEnabled, sharingContent);
    var showMic = typeof muted === 'boolean';
    var mic = microphone || (React.createElement(Microphone, { muted: muted, poorConnection: poorConnection }));
    return (React.createElement(StyledCell, __assign({ className: className || '', as: tag }, props, { "data-testid": "roster-cell" }),
        React.createElement(RosterName, { name: name, subtitle: subtitle }),
        runningLate ? (React.createElement(LateMessage, null, runningLate)) : (React.createElement(React.Fragment, null,
            showMic && React.createElement("div", { className: "ch-mic" }, mic),
            extraIcon,
            videoIcon)),
        menu && (React.createElement(PopOverMenu, { menu: menu, a11yMenuLabel: a11yMenuLabel, buttonProps: buttonProps }))));
};
export default RosterCell;
//# sourceMappingURL=index.js.map