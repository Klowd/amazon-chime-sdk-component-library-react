// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import PopOverSeparator from '../../../../src/components/ui/PopOver/PopOverSeparator';
import React from 'react';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('PopOverSeparator', () => {
  it('should render a popover sepatator', () => {
    const component = <PopOverSeparator />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('popover-separator');

    expect(element).toBeInTheDocument();
  });
});
