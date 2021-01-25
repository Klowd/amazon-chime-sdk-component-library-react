// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { boolean, text } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import Microphone from '.';
import MicrophoneIconDocs from './Microphone.mdx';
import React from 'react';

export default {
  title: 'UI Components/Icons/Microphone',
  parameters: {
    docs: {
      page: MicrophoneIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Microphone
};

export const _Microphone = () => (
  <Flex layout="fill-space-centered">
    <Microphone
      muted={boolean('muted', false)}
      poorConnection={boolean('poorConnection', false)}
      width={text('width', '2rem')}
    />
  </Flex>
);
