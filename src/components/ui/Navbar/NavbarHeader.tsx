// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { BaseProps, FocusableProps } from '../Base';

import IconButton from '../Button/IconButton';
import React from 'react';
import { Remove } from '../icons';
import { StyledHeader } from './Styled';

export interface NavbarHeaderProps extends BaseProps, FocusableProps {
  /** The title of the navigation bar menu */
  title: string;
  /** The callback fired when the navigation bar is closed */
  onClose?: () => void;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({
  title,
  onClose,
  ...rest
}: NavbarHeaderProps) => (
  <StyledHeader {...rest}>
    <span className="ch-title">{title}</span>
    {onClose && (
      <IconButton
        className="ch-btn-close"
        label="Close"
        onClick={onClose}
        icon={<Remove />}
      />
    )}
  </StyledHeader>
);

export default NavbarHeader;
