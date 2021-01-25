// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Heading,
  MicSelection
} from 'amazon-chime-sdk-component-library-react';

import MicrophoneActivityPreview from './MicrophoneActivityPreview';
import React from 'react';
import { title } from '../Styled';

const MicrophoneDevices = () => {
  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Audio
      </Heading>
      <MicSelection />
      <MicrophoneActivityPreview />
    </div>
  );
};

export default MicrophoneDevices;
