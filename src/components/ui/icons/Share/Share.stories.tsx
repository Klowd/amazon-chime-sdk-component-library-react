// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import React from 'react';
import Share from '.';
import ShareIconDocs from './Share.mdx';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/Share',
  parameters: {
    docs: {
      page: ShareIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Share
};

export const _Share = () => <Flex layout="fill-space-centered"><Share width={text('width', '2rem')} /></Flex>;
