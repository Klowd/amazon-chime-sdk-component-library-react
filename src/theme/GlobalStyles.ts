// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { StyledReset } from './StyledReset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${StyledReset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${props => props.theme.fontSizes.baseFontSize};
    font-family: ${props => props.theme.fonts.body};;
    background-color: ${props => props.theme.global.bgd};
    color: ${props => props.theme.global.text};
    min-height: 100%;
  }
`;

export default GlobalStyles;
