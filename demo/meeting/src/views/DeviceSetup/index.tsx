// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import DeviceSelection from '../../components/DeviceSelection';
import { Heading } from 'amazon-chime-sdk-component-library-react';
import JoinMeetingDetails from '../../containers/MeetingJoinDetails';
import React from 'react';
import { StyledLayout } from './Styled';

const DeviceSetup: React.FC = () => (
  <StyledLayout>
    <Heading tag="h1" level={3} css="align-self: center">
      Choose Device Settings
    </Heading>
    <DeviceSelection />
    <JoinMeetingDetails />
  </StyledLayout>
);

export default DeviceSetup;
