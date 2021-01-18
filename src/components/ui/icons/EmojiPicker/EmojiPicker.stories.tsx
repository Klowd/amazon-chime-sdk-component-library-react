// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import EmojiPicker from '.';
import EmojiPickerIconDocs from './EmojiPicker.mdx';
import Flex from '../../Flex';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/EmojiPicker',
  parameters: {
    docs: {
      page: EmojiPickerIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: EmojiPicker,
};

export const _EmojiPicker = () => (
  <Flex layout="fill-space-centered">
    <EmojiPicker width={text('width', '2rem')} />
  </Flex>
);
