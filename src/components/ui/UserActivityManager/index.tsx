// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import { StyledUserActivityManager } from './Styled';
import { useUserActivityState } from '../../../providers/UserActivityProvider';

export interface Props {
  isActive?: boolean | null;
}

export const UserActivityManager: FC<Props> = ({ children }) => {
  const { isUserActive } = useUserActivityState();
  return (
    <StyledUserActivityManager
      isActive={isUserActive}
      className={`${isUserActive ? 'ch-active' : ''}`}
    >
      {children}
    </StyledUserActivityManager>
  );
};

UserActivityManager.displayName = 'UserActivityManager';

export default UserActivityManager;
