// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as styles from '../scss/styles.scss';

import {
  Heading,
  MicSelection
} from 'amazon-chime-sdk-component-library-react';

import MicrophoneActivityPreview from './MicrophoneActivityPreview';
import React from 'react';

const MicrophoneDevices = () => {
  return (
    <div>
      <Heading tag="h2" level={6} css={styles.title}>
        Audio
      </Heading>
      <MicSelection />
      <MicrophoneActivityPreview />
    </div>
  );
};

export default MicrophoneDevices;
