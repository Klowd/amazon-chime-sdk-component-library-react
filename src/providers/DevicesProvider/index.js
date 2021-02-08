// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { AudioInputProvider, useAudioInputs } from './AudioInputProvider';
import { AudioOutputProvider, useAudioOutputs } from './AudioOutputProvider';
import { VideoInputProvider, useVideoInputs } from './VideoInputProvider';
import React from 'react';
var DevicesProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(AudioInputProvider, null,
        React.createElement(AudioOutputProvider, null,
            React.createElement(VideoInputProvider, null, children))));
};
export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
//# sourceMappingURL=index.js.map