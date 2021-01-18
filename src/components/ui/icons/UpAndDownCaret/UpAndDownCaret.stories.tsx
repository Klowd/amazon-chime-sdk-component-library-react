// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import React from 'react';
import UpAndDownCaret from '.';
import UpAndDownCaretIconDocs from './UpAndDownCaret.mdx';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/UpAndDownCaret',
  parameters: {
    docs: {
      page: UpAndDownCaretIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: UpAndDownCaret,
};

export const _UpAndDownCaret = () => (
  <Flex layout="fill-space-centered">
    <UpAndDownCaret width={text('width', '2rem')} />
  </Flex>
);
