// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActionType,
  Severity,
  useMeetingManager,
  useNotificationDispatch,
} from 'amazon-chime-sdk-component-library-react';
import React, { useEffect } from 'react';

import routes from '../constants/routes';
import { useHistory } from 'react-router-dom';

const NoMeetingRedirect: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useNotificationDispatch();
  const meetingManager = useMeetingManager();

  const payload: any = {
    severity: Severity.INFO,
    message: 'No meeting found, please enter a valid meeting Id',
    autoClose: true,
  };

  useEffect(() => {
    if (!meetingManager.meetingSession) {
      dispatch({
        type: ActionType.ADD,
        payload: payload,
      });
      history.push(routes.HOME);
    }
  }, []);

  return <>{children}</>;
};

export default NoMeetingRedirect;
