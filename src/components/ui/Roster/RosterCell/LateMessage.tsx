// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Clock } from '../../icons';
import React from 'react';
import { StyledLateMessage } from './Styled';

const LateMessage: React.FC = ({ children }) => (
  <StyledLateMessage>
    <Clock />
    {children}
  </StyledLateMessage>
);

export default LateMessage;
