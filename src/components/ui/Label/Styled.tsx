// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { baseSpacing, baseStyles } from '../Base';

import styled from 'styled-components';

export const StyledLabel = styled.label`
  color: ${props => props.theme.inputs.fontColor};
  font-size: ${props => props.theme.fontSizes.label.fontSize};
  line-height: ${props => props.theme.fontSizes.label.lineHeight};

  ${baseSpacing}
  ${baseStyles}
`;
