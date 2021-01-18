// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { BaseProps, FocusableProps } from '../Base';

import React from 'react';
import { StyledRoster } from './Styled';

export interface RosterProps extends BaseProps, FocusableProps {}

export const Roster: React.FC<RosterProps> = ({ children, ...rest }) => {
  return <StyledRoster {...rest}>{children}</StyledRoster>;
};

export default Roster;
