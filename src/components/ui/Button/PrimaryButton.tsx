// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Button, { ButtonProps } from './';
import React, { forwardRef } from 'react';

export const PrimaryButton = forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
  <Button variant='primary' {...props} />
));

export default PrimaryButton;
