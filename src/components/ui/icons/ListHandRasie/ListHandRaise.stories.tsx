// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import ListHandRaise from '.';
import ListHandRaiseIconDocs from './ListHandRaise.mdx';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/ListHandRaise',
  parameters: {
    docs: {
      page: ListHandRaiseIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ListHandRaise,
};

export const _ListHandRaise = () => (
  <Flex layout="fill-space-centered">
    <ListHandRaise width={text('width', '2rem')} />
  </Flex>
);
