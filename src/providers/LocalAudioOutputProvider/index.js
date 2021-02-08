// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAudioVideo } from '../AudioVideoProvider';
var Context = createContext(null);
var LocalAudioOutputProvider = function (_a) {
    var children = _a.children;
    var audioVideo = useAudioVideo();
    var _b = useState(true), isAudioOn = _b[0], setIsAudioOn = _b[1];
    var audioRef = useRef(null);
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        if (audioRef.current) {
            audioVideo.bindAudioElement(audioRef.current);
        }
        return function () {
            audioVideo.unbindAudioElement();
        };
    }, [audioVideo]);
    var toggleAudio = useCallback(function () {
        if (!audioRef.current) {
            return;
        }
        setIsAudioOn(!isAudioOn);
        if (isAudioOn) {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.unbindAudioElement();
        }
        else {
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.bindAudioElement(audioRef.current);
        }
    }, [audioRef, audioVideo, isAudioOn]);
    var value = useMemo(function () { return ({ isAudioOn: isAudioOn, toggleAudio: toggleAudio }); }, [
        isAudioOn,
        toggleAudio
    ]);
    return (React.createElement(Context.Provider, { value: value },
        children,
        React.createElement("audio", { ref: audioRef, style: { display: 'none' } })));
};
var useLocalAudioOutput = function () {
    var context = useContext(Context);
    if (!context) {
        throw new Error('useLocalAudioOutput must be used within LocalAudioOutputProvider');
    }
    return context;
};
export { LocalAudioOutputProvider, useLocalAudioOutput };
//# sourceMappingURL=index.js.map