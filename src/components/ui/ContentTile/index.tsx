// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { VideoTile } from '../../ui/VideoTile';
import styled from 'styled-components';

export const ContentTile = styled(VideoTile)`
  background-color: ${({ theme }) => theme.colors.greys.grey80};
`;

export default ContentTile;
