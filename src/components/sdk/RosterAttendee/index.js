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
import RosterCell from '../../ui/Roster/RosterCell';
import MicrophoneActivity from '../MicrophoneActivity';
import React from 'react';
import useAttendeeStatus from '../../../hooks/sdk/useAttendeeStatus';
import { useRosterState } from '../../../providers/RosterProvider';
export var RosterAttendee = function (_a) {
    var _b;
    var attendeeId = _a.attendeeId, rest = __rest(_a, ["attendeeId"]);
    var _c = useAttendeeStatus(attendeeId), muted = _c.muted, videoEnabled = _c.videoEnabled, sharingContent = _c.sharingContent;
    var roster = useRosterState().roster;
    var attendeeName = ((_b = roster[attendeeId]) === null || _b === void 0 ? void 0 : _b.name) || '';
    return (React.createElement(RosterCell, __assign({ name: attendeeName, muted: muted, videoEnabled: videoEnabled, sharingContent: sharingContent }, rest, { microphone: React.createElement(MicrophoneActivity, { attendeeId: attendeeId }) })));
};
export default RosterAttendee;
//# sourceMappingURL=index.js.map