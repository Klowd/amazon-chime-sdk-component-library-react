// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import Lock from '.';
import LockIconDocs from './Lock.mdx';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Lock',
  parameters: {
    docs: {
      page: LockIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Lock,
};

export const _Lock = () => (
  <Flex layout="fill-space-centered">
    <Lock width={text('width', '2rem')} />
  </Flex>
);
