// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMeetingManager } from '../../providers/MeetingProvider';
export var AudioVideoContext = createContext(null);
var AudioVideoProvider = function (_a) {
    var children = _a.children;
    var meetingManager = useMeetingManager();
    var _b = useState(null), audioVideo = _b[0], setAudioVideo = _b[1];
    useEffect(function () {
        function audioVideoUpdateCb(av) {
            setAudioVideo(av);
        }
        meetingManager.subscribeToAudioVideo(audioVideoUpdateCb);
        return function () { return meetingManager.unsubscribeFromAudioVideo(audioVideoUpdateCb); };
    }, []);
    return (React.createElement(AudioVideoContext.Provider, { value: audioVideo }, children));
};
var useAudioVideo = function () {
    var audioVideo = useContext(AudioVideoContext);
    return audioVideo;
};
export { useAudioVideo, AudioVideoProvider };
//# sourceMappingURL=index.js.map