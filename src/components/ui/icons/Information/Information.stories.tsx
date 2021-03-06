// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import Information from '.';
import InformationIconDocs from './Information.mdx';
import React from 'react';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Information',
  parameters: {
    docs: {
      page: InformationIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Information
};

export const _Information = () => <Flex layout="fill-space-centered"><Information width={text('width', '2rem')} /></Flex>;
