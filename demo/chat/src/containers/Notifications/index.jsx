// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  NotificationGroup,
  useNotificationState,
} from 'amazon-chime-sdk-component-library-react';

import React from 'react';

const Notifications = () => {
  const { notifications } = useNotificationState();

  return notifications.length ? <NotificationGroup /> : null;
};

export default Notifications;