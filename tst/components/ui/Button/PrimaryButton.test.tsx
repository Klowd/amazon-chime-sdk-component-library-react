// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import PrimaryButton from '../../../../src/components/ui/Button/PrimaryButton';
import React from 'react';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Primary Button', () => {

  it('should render a primary Button', () => {
    const labelText = 'Primary Button';
    const component = <PrimaryButton label={labelText} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('button')).toBeInTheDocument();
  });

});