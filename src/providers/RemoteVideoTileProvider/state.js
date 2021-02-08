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
export var VideoTileActionType;
(function (VideoTileActionType) {
    VideoTileActionType[VideoTileActionType["UPDATE"] = 0] = "UPDATE";
    VideoTileActionType[VideoTileActionType["REMOVE"] = 1] = "REMOVE";
    VideoTileActionType[VideoTileActionType["RESET"] = 2] = "RESET";
})(VideoTileActionType || (VideoTileActionType = {}));
export var initialState = {
    tiles: [],
    tileIdToAttendeeId: {},
    attendeeIdToTileId: {},
    size: 0
};
var removeProperty = function (obj, property) {
    var newState = Object.assign({}, obj);
    delete newState[property];
    return newState;
};
export function reducer(state, _a) {
    var _b, _c;
    var type = _a.type, payload = _a.payload;
    var tiles = state.tiles, tileIdToAttendeeId = state.tileIdToAttendeeId, attendeeIdToTileId = state.attendeeIdToTileId, size = state.size;
    switch (type) {
        case VideoTileActionType.UPDATE: {
            var tileId = payload.tileId, _d = payload.attendeeId, attendeeId = _d === void 0 ? '' : _d;
            var tileStr = tileId.toString();
            var isPresent = tileIdToAttendeeId[tileStr];
            if (isPresent) {
                return state;
            }
            var newTiles = __spreadArrays(tiles, [tileId]);
            var tileIds = __assign(__assign({}, tileIdToAttendeeId), (_b = {}, _b[tileStr] = attendeeId, _b));
            var attendeeIds = __assign(__assign({}, attendeeIdToTileId), (_c = {}, _c[attendeeId] = tileId, _c));
            return {
                tiles: newTiles,
                tileIdToAttendeeId: tileIds,
                attendeeIdToTileId: attendeeIds,
                size: size + 1
            };
        }
        case VideoTileActionType.REMOVE: {
            var tileId_1 = payload.tileId;
            var attendeeId = tileIdToAttendeeId[tileId_1];
            var tileStr = tileId_1.toString();
            if (!attendeeId) {
                return state;
            }
            var newTiles = tiles.filter(function (id) { return tileId_1 !== id; });
            var tileIds = removeProperty(tileIdToAttendeeId, tileStr);
            var attendeeIds = removeProperty(attendeeIdToTileId, attendeeId);
            return {
                tiles: newTiles,
                tileIdToAttendeeId: tileIds,
                attendeeIdToTileId: attendeeIds,
                size: size - 1
            };
        }
        case VideoTileActionType.RESET: {
            return initialState;
        }
        default:
            throw new Error('Incorrect type in VideoProvider');
    }
}
//# sourceMappingURL=state.js.map