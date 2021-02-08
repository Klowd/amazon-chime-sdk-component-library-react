// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { useMeetingManager } from '../../providers/MeetingProvider';
export var useMeetingStatus = function () {
    var meetingManager = useMeetingManager();
    var _a = useState(function () { return meetingManager.meetingStatus; }), meetingStatus = _a[0], setMeetingStatus = _a[1];
    useEffect(function () {
        var callback = function (updatedMeetingStatus) {
            setMeetingStatus(updatedMeetingStatus);
        };
        meetingManager.subscribeToMeetingStatus(callback);
        return function () {
            meetingManager.unsubscribeFromMeetingStatus(callback);
        };
    }, []);
    return meetingStatus;
};
//# sourceMappingURL=useMeetingStatus.js.map