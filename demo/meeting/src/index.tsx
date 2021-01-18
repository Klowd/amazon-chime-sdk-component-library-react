// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import './style.css';

import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
