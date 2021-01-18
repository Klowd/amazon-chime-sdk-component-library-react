// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { boolean, text } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import Pin from '.';
import PinIconDocs from './Pin.mdx';
import React from 'react';

export default {
  title: 'UI Components/Icons/Pin',
  parameters: {
    docs: {
      page: PinIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Pin,
};

export const _Pin = () => (
  <Flex layout="fill-space-centered">
    <Pin unpin={boolean('unpin', false)} width={text('width', '2rem')} />
  </Flex>
);
