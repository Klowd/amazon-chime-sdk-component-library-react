// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import Label from '../../../../src/components/ui/Label';
import React from 'react';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Label', () => {
  it('should render a Label', () => {
    const component = <Label />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('label')).toBeInTheDocument();
  });

  it('should render a Label with content', () => {
    const labelContent = 'this is a label';
    const component = <Label>{labelContent}</Label>;
    const { getByTestId } = renderWithTheme(lightTheme, component);

    const label = getByTestId('label');
    expect(label).toHaveTextContent(labelContent);
  });
});