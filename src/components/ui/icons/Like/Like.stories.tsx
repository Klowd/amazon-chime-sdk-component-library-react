// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import Like from '.';
import LikeIconDocs from './Like.mdx';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Like',
  parameters: {
    docs: {
      page: LikeIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Like,
};

export const _Like = () => (
  <Flex layout="fill-space-centered">
    <Like width={text('width', '2rem')} />
  </Flex>
);
