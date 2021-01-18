// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';

import { MeetingStatus } from '../../types';
import { useMeetingManager } from '../../providers/MeetingProvider';

export const useMeetingStatus = () => {
  const meetingManager = useMeetingManager();
  const [meetingStatus, setMeetingStatus] = useState(
    () => meetingManager.meetingStatus
  );

  useEffect(() => {
    const callback = (updatedMeetingStatus: MeetingStatus): void => {
      setMeetingStatus(updatedMeetingStatus);
    };
    meetingManager.subscribeToMeetingStatus(callback);

    return (): void => {
      meetingManager.unsubscribeFromMeetingStatus(callback);
    };
  }, []);

  return meetingStatus;
};
