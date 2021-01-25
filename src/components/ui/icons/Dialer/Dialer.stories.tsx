// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Dialer from '.';
import DialerIconDocs from './Dialer.mdx';
import Flex from '../../Flex';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Dialer',
  parameters: {
    docs: {
      page: DialerIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Dialer
};

export const _Dialer = () => <Flex layout="fill-space-centered"><Dialer width={text('width', '2rem')} /></Flex>;
