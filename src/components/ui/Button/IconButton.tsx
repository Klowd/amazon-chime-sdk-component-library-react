// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Button, { ButtonProps } from './';
import React, { forwardRef } from 'react';

export interface IconButtonProps extends ButtonProps {}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <Button ref={ref} variant="icon" {...props} />
  )
);

export default IconButton;
