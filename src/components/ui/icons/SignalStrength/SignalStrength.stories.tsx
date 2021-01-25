// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import React from 'react';
import SignalStrength from '.';
import SignalStrengthIconDocs from './SignalStrength.mdx';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/SignalStrength',
  parameters: {
    docs: {
      page: SignalStrengthIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: SignalStrength
};

export const _SignalStrength = () => (
  <Flex layout="fill-space-centered"><SignalStrength width={text('width', '2rem')} /></Flex>
);
