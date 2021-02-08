// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useState } from 'react';
import { useAudioVideo } from '../../providers/AudioVideoProvider';
export function useToggleLocalMute() {
    var audioVideo = useAudioVideo();
    var _a = useState(function () { return (audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeIsLocalAudioMuted()) || false; }), muted = _a[0], setMuted = _a[1];
    useEffect(function () {
        var muteUnmutecallback = function (localMuted) {
            setMuted(localMuted);
        };
        audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSubscribeToMuteAndUnmuteLocalAudio(muteUnmutecallback);
        setMuted((audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeIsLocalAudioMuted()) || false);
        return function () {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(muteUnmutecallback);
        };
    }, [audioVideo]);
    var toggleMute = useCallback(function () {
        if (muted) {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnmuteLocalAudio();
        }
        else {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeMuteLocalAudio();
        }
    }, [muted, audioVideo]);
    return { muted: muted, toggleMute: toggleMute };
}
export default useToggleLocalMute;
//# sourceMappingURL=useToggleLocalMute.js.map