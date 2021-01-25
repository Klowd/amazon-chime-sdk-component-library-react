// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import React from 'react';
import ScreenShare from '.';
import ScreenShareIconDocs from './ScreenShare.mdx';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/ScreenShare',
  parameters: {
    docs: {
      page: ScreenShareIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ScreenShare,
};

export const _ScreenShare = () => (
  <Flex layout="fill-space-centered">
    <ScreenShare width={text('width', '2rem')} />
  </Flex>
);
