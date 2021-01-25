// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { select, text } from '@storybook/addon-knobs';

import Caution from './';
import CautionIconDocs from './Caution.mdx';
import Flex from '../../Flex';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Caution',
  parameters: {
    docs: {
      page: CautionIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Caution
};

export const _Caution = () => (
  <Flex layout="fill-space-centered">
    <Caution width={text('width', '2rem')} variant={select('displayStyle', ['default', 'fill-warning', 'fill-error'], 'default')} />
  </Flex>
);
