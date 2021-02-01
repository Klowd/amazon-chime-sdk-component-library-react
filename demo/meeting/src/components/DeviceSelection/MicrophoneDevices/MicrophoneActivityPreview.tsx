// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Label } from 'amazon-chime-sdk-component-library-react';

import MicrophoneActivityPreviewBar from './MicrophoneActivityPreviewBar';
import * from '../scss/style.scss';

const MicrophoneActivityPreview = () => {
  return (
    <StyledPreviewGroup>
      <Label style={{ display: 'block', marginBottom: '.5rem' }}>
        Microphone activity
      </Label>
      <MicrophoneActivityPreviewBar />
    </StyledPreviewGroup>
  );
};

export default MicrophoneActivityPreview;
