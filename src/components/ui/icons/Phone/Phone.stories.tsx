// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import Phone from '.';
import PhoneIconDocs from './Phone.mdx';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Phone',
  parameters: {
    docs: {
      page: PhoneIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Phone,
};

export const _Phone = () => (
  <Flex layout="fill-space-centered">
    <Phone width={text('width', '2rem')} />
  </Flex>
);
