// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ActionType, Severity, initialState, reducer } from './state';
import React, { useContext, useReducer } from 'react';
var StateContext = React.createContext(initialState);
var DispatchContext = React.createContext(function () { });
var NotificationProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    return (React.createElement(StateContext.Provider, { value: state },
        React.createElement(DispatchContext.Provider, { value: dispatch }, children)));
};
var useNotificationState = function () {
    var state = useContext(StateContext);
    return state;
};
var useNotificationDispatch = function () {
    var dispatch = useContext(DispatchContext);
    return dispatch;
};
export { NotificationProvider, useNotificationState, useNotificationDispatch, Severity, ActionType };
//# sourceMappingURL=index.js.map