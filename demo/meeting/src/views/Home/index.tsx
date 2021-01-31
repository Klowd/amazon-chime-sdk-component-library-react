// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import MeetingFormSelector from '../../containers/MeetingFormSelector';
import React from 'react';
import { StyledLayout } from './Styled';
import { VersionLabel } from '../../utils/VersionLabel';

const Home = () => (
  <StyledLayout>
    <MeetingFormSelector />
    <VersionLabel />
  </StyledLayout>
);

export default Home;
