// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Eye from '.';
import EyeIconDocs from './Eye.mdx';
import Flex from '../../Flex';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Eye',
  parameters: {
    docs: {
      page: EyeIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Eye
};

export const _Eye = () => <Flex layout="fill-space-centered"><Eye width={text('width', '2rem')} /></Flex>;
