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
export var ContentActionType;
(function (ContentActionType) {
    ContentActionType[ContentActionType["STARTING"] = 0] = "STARTING";
    ContentActionType[ContentActionType["DID_STOP"] = 1] = "DID_STOP";
    ContentActionType[ContentActionType["UPDATE"] = 2] = "UPDATE";
    ContentActionType[ContentActionType["TOGGLE_PAUSE"] = 3] = "TOGGLE_PAUSE";
    ContentActionType[ContentActionType["REMOVE"] = 4] = "REMOVE";
    ContentActionType[ContentActionType["DENIED"] = 5] = "DENIED";
    ContentActionType[ContentActionType["RESET"] = 6] = "RESET";
})(ContentActionType || (ContentActionType = {}));
export var initialState = {
    tileId: null,
    paused: false,
    isLocalUserSharing: false,
    isLocalShareLoading: false,
    sharingAttendeeId: null
};
export function reducer(state, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case ContentActionType.STARTING: {
            return __assign(__assign({}, state), { isLocalShareLoading: true });
        }
        case ContentActionType.UPDATE: {
            var _b = payload, isLocalUser = _b.isLocalUser, tileState = _b.tileState;
            var tileId = state.tileId;
            if (tileId === tileState.tileId ||
                (tileId && tileId > tileState.tileId)) {
                return state;
            }
            return {
                paused: false,
                tileId: tileState.tileId,
                isLocalShareLoading: false,
                isLocalUserSharing: isLocalUser,
                sharingAttendeeId: tileState.boundAttendeeId
            };
        }
        case ContentActionType.REMOVE: {
            var tileId = state.tileId;
            if (tileId !== payload) {
                return state;
            }
            return initialState;
        }
        case ContentActionType.DID_STOP: {
            var isLocalUserSharing = state.isLocalUserSharing;
            if (isLocalUserSharing) {
                return initialState;
            }
            return __assign(__assign({}, state), { isLocalShareLoading: false, isLocalUserSharing: false, paused: false });
        }
        case ContentActionType.TOGGLE_PAUSE: {
            if (!state.isLocalUserSharing) {
                return state;
            }
            return __assign(__assign({}, state), { paused: !state.paused });
        }
        case ContentActionType.DENIED: {
            if (!state.isLocalShareLoading) {
                return state;
            }
            return __assign(__assign({}, state), { isLocalShareLoading: false });
        }
        case ContentActionType.RESET: {
            return initialState;
        }
        default:
            throw new Error('Incorrect type in VideoProvider');
    }
}
//# sourceMappingURL=state.js.map