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
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useFeaturedTileState } from '../../../providers/FeaturedVideoTileProvider';
import { useGridData } from '../../ui/VideoGrid';
import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
import { useRosterState } from '../../../providers/RosterProvider';
export var FeaturedRemoteVideos = function (props) {
    var gridData = useGridData();
    var roster = useRosterState().roster;
    var featuredTileId = useFeaturedTileState().tileId;
    var contentTileId = useContentShareState().tileId;
    var _a = useRemoteVideoTileState(), tiles = _a.tiles, tileIdToAttendeeId = _a.tileIdToAttendeeId;
    return (React.createElement(React.Fragment, null, tiles.map(function (tileId) {
        var featured = !contentTileId && featuredTileId === tileId;
        var styles = gridData && featured ? 'grid-area: ft;' : '';
        var classes = (featured ? 'ch-featured-tile' : '') + " " + (props.className || '');
        var attendee = roster[tileIdToAttendeeId[tileId]] || {};
        var name = attendee.name;
        return (React.createElement(RemoteVideo, __assign({ tileId: tileId, name: name }, props, { className: classes, key: tileId, css: styles })));
    })));
};
export default memo(FeaturedRemoteVideos);
//# sourceMappingURL=index.js.map