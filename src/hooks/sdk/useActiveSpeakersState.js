// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { useMeetingManager } from '../../providers/MeetingProvider';
export function useActiveSpeakersState() {
    var meetingManager = useMeetingManager();
    var _a = useState([]), activeSpeakers = _a[0], setActiveSpeakers = _a[1];
    useEffect(function () {
        var activeSpeakerCb = function (speakers) { return setActiveSpeakers(speakers); };
        meetingManager.subscribeToActiveSpeaker(activeSpeakerCb);
        return function () { return meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCb); };
    }, []);
    return activeSpeakers;
}
export default useActiveSpeakersState;
//# sourceMappingURL=useActiveSpeakersState.js.map