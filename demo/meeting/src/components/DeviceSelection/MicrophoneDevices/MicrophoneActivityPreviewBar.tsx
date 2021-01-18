// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef } from 'react';

import ActivityBar from '../../ActivityBar';
import { useLocalAudioInputActivityPreview } from 'amazon-chime-sdk-component-library-react';

const MicrophoneActivityPreviewBar = () => {
  const activityBarRef = useRef<HTMLDivElement>();
  useLocalAudioInputActivityPreview(activityBarRef);

  return <ActivityBar ref={activityBarRef} />;
};

export default MicrophoneActivityPreviewBar;
