// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioInputProvider, useAudioInputs } from './AudioInputProvider';
import { AudioOutputProvider, useAudioOutputs } from './AudioOutputProvider';
import { VideoInputProvider, useVideoInputs } from './VideoInputProvider';

import React from 'react';

const DevicesProvider: React.FC = ({ children }) => (
  <AudioInputProvider>
    <AudioOutputProvider>
      <VideoInputProvider>{children}</VideoInputProvider>
    </AudioOutputProvider>
  </AudioInputProvider>
);

export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
