// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';

import { DevicePermissionStatus } from '../enums';
import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

export default function useDevicePermissionStatus() {
  const meetingManager = useMeetingManager();
  const [permission, setPermission] = useState<string>(
    DevicePermissionStatus.UNSET
  );

  useEffect(() => {
    const callback = (updatedPermission: string): void => {
      setPermission(updatedPermission);
    };
    meetingManager.subscribeToDevicePermissionStatus(callback);
    return () => {
      meetingManager.unsubscribeFromDevicePermissionStatus(callback);
    };
  }, [meetingManager]);

  return permission;
}
