// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import React from 'react';
import Remove from '.';
import RemoveIconDocs from './Remove.mdx';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Remove',
  parameters: {
    docs: {
      page: RemoveIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Remove
};

export const _Remove = () => <Flex layout="fill-space-centered"><Remove width={text('width', '2rem')} /></Flex>;
