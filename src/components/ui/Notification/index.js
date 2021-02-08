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
import { Caution, CheckRound, Clock, Information, Remove } from '../icons';
import React, { useEffect } from 'react';
import { StyledCloseIconButton, StyledNotification } from './Styled';
export var DEFAULT_DELAY = 6000;
var Severity;
(function (Severity) {
    Severity["ERROR"] = "error";
    Severity["SUCCESS"] = "success";
    Severity["INFO"] = "info";
    Severity["WARNING"] = "warning";
})(Severity || (Severity = {}));
var iconMapping = {
    success: React.createElement(CheckRound, null),
    warning: React.createElement(Clock, null),
    error: React.createElement(Caution, null),
    info: React.createElement(Information, null)
};
export var Notification = function (props) {
    var tag = props.tag, message = props.message, onClose = props.onClose, _a = props.autoClose, autoClose = _a === void 0 ? false : _a, _b = props.autoCloseDelay, autoCloseDelay = _b === void 0 ? DEFAULT_DELAY : _b, _c = props.severity, severity = _c === void 0 ? Severity.ERROR : _c, className = props.className;
    var ariaLive = severity === Severity.ERROR ? 'assertive' : 'polite';
    var ariaRole = severity === Severity.ERROR ? 'alert' : 'status';
    useEffect(function () {
        if (!autoClose) {
            return;
        }
        var timer = setTimeout(onClose, autoCloseDelay);
        return function () { return clearTimeout(timer); };
    }, []);
    return (React.createElement(StyledNotification, __assign({ "aria-live": ariaLive, role: ariaRole, severity: severity, as: tag }, props, { className: className || '', "data-testid": "notification" }),
        React.createElement("div", { className: "ch-severity-icon", "data-testid": "severity-icon" }, iconMapping[severity]),
        React.createElement("output", { className: "ch-message", "data-testid": "message", role: ariaRole }, message),
        onClose && (React.createElement(StyledCloseIconButton, { label: "close", icon: React.createElement(Remove, null), onClick: onClose }))));
};
export default Notification;
//# sourceMappingURL=index.js.map