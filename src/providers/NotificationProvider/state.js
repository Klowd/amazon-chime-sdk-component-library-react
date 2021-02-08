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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { v4 as uuidv4 } from 'uuid';
export var Severity;
(function (Severity) {
    Severity["ERROR"] = "error";
    Severity["SUCCESS"] = "success";
    Severity["INFO"] = "info";
    Severity["WARNING"] = "warning";
})(Severity || (Severity = {}));
;
;
;
export var ActionType;
(function (ActionType) {
    ActionType[ActionType["ADD"] = 0] = "ADD";
    ActionType[ActionType["REMOVE"] = 1] = "REMOVE";
    ActionType[ActionType["REMOVE_ALL"] = 2] = "REMOVE_ALL";
})(ActionType || (ActionType = {}));
;
;
export var initialState = {
    notifications: [],
};
export var reducer = function (state, action) {
    var type = action.type, payload = action.payload;
    switch (type) {
        case ActionType.ADD: {
            var notification = __assign({ id: uuidv4() }, payload);
            var notifications = (notification === null || notification === void 0 ? void 0 : notification.replaceAll) ? [notification]
                : __spreadArrays(state.notifications, [notification]);
            return __assign(__assign({}, state), { notifications: notifications });
        }
        case ActionType.REMOVE: {
            var notifications = state.notifications.filter(function (notification) { return (notification === null || notification === void 0 ? void 0 : notification.id) !== payload; });
            return __assign(__assign({}, state), { notifications: notifications });
        }
        case ActionType.REMOVE_ALL: {
            return __assign(__assign({}, state), { notifications: [] });
        }
        default:
            throw new Error('Incorrect type in NotificationProvider');
    }
};
//# sourceMappingURL=state.js.map