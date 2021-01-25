// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Check from '.';
import CheckIconDocs from './Check.mdx';
import Flex from '../../Flex';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Check',
  parameters: {
    docs: {
      page: CheckIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Check
};

export const _Check = () => <Flex layout="fill-space-centered"><Check width={text('width', '2rem')} /></Flex>;
