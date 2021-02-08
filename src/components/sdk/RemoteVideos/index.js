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
import React, { memo } from 'react';
import { RemoteVideo } from '../RemoteVideo';
import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { useRosterState } from '../../../providers/RosterProvider';
export var RemoteVideos = function (props) {
    var roster = useRosterState().roster;
    var _a = useRemoteVideoTileState(), tiles = _a.tiles, tileIdToAttendeeId = _a.tileIdToAttendeeId;
    return (React.createElement(React.Fragment, null, tiles.map(function (tileId) {
        var attendee = roster[tileIdToAttendeeId[tileId]] || {};
        var name = attendee.name;
        return (React.createElement(RemoteVideo, __assign({}, props, { key: tileId, tileId: tileId, name: name })));
    })));
};
export default memo(RemoteVideos);
//# sourceMappingURL=index.js.map