// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActionType,
  NotificationProvider,
  Severity,
  useNotificationDispatch,
} from '../../../providers/NotificationProvider';

import Button from '../Button';
import Flex from '../Flex';
import NotificationGroup from '.';
import NotificationGroupDocs from './NotificationGroup.mdx';
import React from 'react';
import styled from 'styled-components';

export default {
  title: 'UI Components/NotificationGroup',
  parameters: {
    docs: {
      page: NotificationGroupDocs.parameters.docs.page().props.children.type
    }
  },
  component: NotificationGroup
};

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  z-index: 50;
`;

const StorybookTestButton = ({ label, payload, variant }: any) => {
  const dispatch = useNotificationDispatch();

  const addNotification = (e: any) => {
    dispatch({
      type: ActionType.ADD,
      payload: payload
    });
  }

  return (
    <Button onClick={addNotification} variant={variant} label={label}/>
  );
};

const AddNotificationButtonGroup = () => {
  const payloadForSimpleNotification: any = {
    severity: Severity.INFO,
    message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  };
  const payloadForAutoclosingNotification = {
    severity: Severity.ERROR,
    message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    autoClose: true
  };
  return (
    <StyledWrapper>
      <StorybookTestButton label='Add simple notification' payload={payloadForSimpleNotification} variant="primary"/>
      <StorybookTestButton label='Add autoclosing notification' payload={payloadForAutoclosingNotification} variant="secondary"/>
    </StyledWrapper>
  );
};

export const NotificationGroupStory = () => {
  return (
    <NotificationProvider>
      <NotificationGroup />
      <AddNotificationButtonGroup />
    </NotificationProvider>
  );
};

NotificationGroupStory.story = {
  name: 'Notification group'
}
