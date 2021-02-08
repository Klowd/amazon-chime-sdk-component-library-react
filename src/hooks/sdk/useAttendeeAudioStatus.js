// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { useAudioVideo } from '../../providers/AudioVideoProvider';
export function useAttendeeAudioStatus(attendeeId) {
    var audioVideo = useAudioVideo();
    var _a = useState(false), muted = _a[0], setMuted = _a[1];
    var _b = useState(1), signalStrength = _b[0], setSignalStrength = _b[1];
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var callback = function (_, __, muted, signalStrength) {
            if (muted !== null) {
                setMuted(muted);
            }
            if (signalStrength !== null) {
                setSignalStrength(signalStrength);
            }
        };
        audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, callback);
        return function () { return audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId); };
    }, [audioVideo, attendeeId]);
    return {
        muted: muted,
        signalStrength: signalStrength
    };
}
export default useAttendeeAudioStatus;
//# sourceMappingURL=useAttendeeAudioStatus.js.map