// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { StyledAudioGroup, StyledVideoGroup, StyledWrapper } from './Styled';

import CameraDevices from './CameraDevices';
import MicrophoneDevices from './MicrophoneDevices';
import React from 'react';
import SpeakerDevices from './SpeakerDevices';

const DeviceSelection = () => (
  <StyledWrapper>
    <StyledAudioGroup>
      <MicrophoneDevices />
      <SpeakerDevices />
    </StyledAudioGroup>
    <StyledVideoGroup>
      <CameraDevices />
    </StyledVideoGroup>
  </StyledWrapper>
);

export default DeviceSelection;
