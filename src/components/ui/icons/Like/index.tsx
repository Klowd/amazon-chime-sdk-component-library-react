// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Svg, { SvgProps } from '../Svg';

import React from 'react';

const Like: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M18.977 12.053l-1.29 4.575C17.528 17.422 16.818 18 16 18H9.126c-.197 0-.357-.158-.357-.352V11.385l3.034-5.353c.123-.044.45-.069.76.105.479.271.732.897.733 1.842l.089 1.43c.02.45.389.803.84.803h3.194c.479 0 .926.211 1.228.58.298.364.415.837.33 1.261M7.337 18h-1.99C5.156 18 5 17.843 5 17.652V12.1c0-.19.156-.347.347-.347h2.037c.212 0 .385.173.385.385v5.431c0 .237-.193.43-.431.43m12.082-7.84c-.492-.602-1.22-.947-2.001-.947h-3.044l-.08-1.264c0-2.228-1.244-2.765-1.778-2.893-.577-.137-1.321-.028-1.55.423l-3.05 5.383c-.164-.069-.344-.108-.533-.108H5.347C4.605 10.753 4 11.358 4 12.1v5.552C4 18.394 4.605 19 5.347 19h1.99c.347 0 .66-.128.908-.333.238.204.544.333.88.333H16c1.29 0 2.413-.914 2.66-2.136l1.289-4.575c.153-.756-.04-1.53-.53-2.129" />
  </Svg>
);

Like.displayName = 'Like';

export default Like;
