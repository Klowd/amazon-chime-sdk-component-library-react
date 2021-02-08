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
import { VideoGrid } from '../../ui/VideoGrid';
import { ContentShare } from '../ContentShare';
import { FeaturedRemoteVideos } from '../FeaturedRemoteVideos';
import { LocalVideo } from '../LocalVideo';
import React from 'react';
import { RemoteVideos } from '../RemoteVideos';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useFeaturedTileState } from '../../../providers/FeaturedVideoTileProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useRemoteVideoTileState } from '../../../providers/RemoteVideoTileProvider';
var fluidStyles = "\n  height: 100%;\n  width: 100%;\n";
var staticStyles = "\n  display: flex;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  width: 20vw;\n  max-height: 30vh;\n  height: auto;\n\n  video {\n    position: static;\n  }\n";
export var VideoTileGrid = function (_a) {
    var noRemoteVideoView = _a.noRemoteVideoView, _b = _a.layout, layout = _b === void 0 ? "standard" : _b, rest = __rest(_a, ["noRemoteVideoView", "layout"]);
    var featureTileId = useFeaturedTileState().tileId;
    var tiles = useRemoteVideoTileState().tiles;
    var contentTileId = useContentShareState().tileId;
    var isVideoEnabled = useLocalVideo().isVideoEnabled;
    var featured = layout === "featured" && !!featureTileId || !!contentTileId;
    var remoteSize = tiles.length + (contentTileId ? 1 : 0);
    var gridSize = remoteSize > 1 && isVideoEnabled ? remoteSize + 1 : remoteSize;
    return (React.createElement(VideoGrid, __assign({}, rest, { size: gridSize, layout: featured ? 'featured' : null }),
        React.createElement(ContentShare, { css: "grid-area: ft;" }),
        layout === "featured" ? React.createElement(FeaturedRemoteVideos, null) : React.createElement(RemoteVideos, null),
        React.createElement(LocalVideo, { nameplate: "Me", css: gridSize > 1 ? fluidStyles : staticStyles }),
        remoteSize === 0 && noRemoteVideoView));
};
export default VideoTileGrid;
//# sourceMappingURL=index.js.map