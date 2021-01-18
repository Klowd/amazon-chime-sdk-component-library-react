// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  CameraSelection,
  Heading,
  Label,
  PreviewVideo,
  QualitySelection
} from 'amazon-chime-sdk-component-library-react';
import { StyledInputGroup, title } from '../Styled';

import React from 'react';

const CameraDevices = () => {
  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Video
      </Heading>
      <PreviewVideo />
      <StyledInputGroup>
        <CameraSelection />
      </StyledInputGroup>
      <StyledInputGroup>
        <QualitySelection />
      </StyledInputGroup>
    </div>
  );
};

export default CameraDevices;
