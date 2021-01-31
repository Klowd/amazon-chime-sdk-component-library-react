// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Spinner: React.FC = () => {
  return (
    <FontAwesomeIcon icon={faSpinner} spin />
  );
}

export default Spinner;
