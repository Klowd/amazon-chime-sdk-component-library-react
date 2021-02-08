// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useMeetingManager } from '../MeetingProvider';
import { useRemoteVideoTileState } from '../RemoteVideoTileProvider';
var TILE_TRANSITION_DELAY = 1500;
var FeaturedTileContext = createContext(null);
var FeaturedVideoTileProvider = function (_a) {
    var children = _a.children;
    var meetingManager = useMeetingManager();
    var attendeeIdToTileId = useRemoteVideoTileState().attendeeIdToTileId;
    var activeTileRef = useRef(null);
    var _b = useState(null), activeTile = _b[0], setActiveTile = _b[1];
    var timeout = useRef(null);
    var pendingAttendee = useRef(null);
    useEffect(function () {
        var activeSpeakerCallback = function (activeAttendees) {
            var activeId = activeAttendees[0];
            if (activeId === pendingAttendee.current) {
                return;
            }
            pendingAttendee.current = activeId;
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            if (!activeId) {
                activeTileRef.current = null;
                setActiveTile(null);
                return;
            }
            var tileId = attendeeIdToTileId[activeId];
            if (!tileId) {
                if (activeTileRef.current) {
                    timeout.current = setTimeout(function () {
                        activeTileRef.current = null;
                        setActiveTile(null);
                    }, TILE_TRANSITION_DELAY);
                }
                return;
            }
            if (tileId === activeTileRef.current) {
                return;
            }
            // Set featured tile immediately if there is no current featured tile.
            // Otherwise, delay it to avoid tiles jumping around too frequently
            if (!activeTileRef.current) {
                activeTileRef.current = tileId;
                setActiveTile(tileId);
            }
            else {
                timeout.current = setTimeout(function () {
                    activeTileRef.current = tileId;
                    setActiveTile(tileId);
                }, TILE_TRANSITION_DELAY);
            }
        };
        meetingManager.subscribeToActiveSpeaker(activeSpeakerCallback);
        return function () {
            return meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCallback);
        };
    }, [attendeeIdToTileId]);
    var value = useMemo(function () { return ({
        tileId: activeTile
    }); }, [activeTile]);
    return (React.createElement(FeaturedTileContext.Provider, { value: value }, children));
};
function useFeaturedTileState() {
    var state = useContext(FeaturedTileContext);
    if (!state) {
        throw new Error('useFeaturedTileState must be used within an FeaturedVideoTileProvider');
    }
    return state;
}
export { FeaturedVideoTileProvider, useFeaturedTileState };
//# sourceMappingURL=index.js.map