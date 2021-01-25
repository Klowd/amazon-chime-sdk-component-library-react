// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import React from 'react';
import Rooms from '.';
import RoomsIconDocs from './Rooms.mdx';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Rooms',
  parameters: {
    docs: {
      page: RoomsIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Rooms
};

export const _Rooms = () => <Flex layout="fill-space-centered"><Rooms width={text('width', '2rem')} /></Flex>;
