// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { boolean, text } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import React from 'react';
import Sound from '.';
import SoundIconDocs from './Sound.mdx';

export default {
  title: 'UI Components/Icons/Sound',
  parameters: {
    docs: {
      page: SoundIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Sound
};

export const _Sound = () => (
  <Flex layout="fill-space-centered"><Sound disabled={boolean('disabled', false)} width={text('width', '2rem')} /></Flex>
);
