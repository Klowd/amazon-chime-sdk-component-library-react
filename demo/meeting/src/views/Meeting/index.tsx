// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { StyledContent, StyledLayout } from './Styled';
import {
  UserActivityProvider,
  VideoTileGrid
} from 'amazon-chime-sdk-component-library-react';

import MeetingControls from '../../containers/MeetingControls';
import MeetingDetails from '../../containers/MeetingDetails';
import MeetingMetrics from '../../containers/MeetingMetrics';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import React from 'react';
import { RealitimeSubscribeStateProvider } from '../../providers/RealtimeSubscribeProvider';
import useMeetingEndRedirect from '../../hooks/useMeetingEndRedirect';
import { useNavigation } from '../../providers/NavigationProvider';

const MeetingView = () => {
  useMeetingEndRedirect();
  const { showNavbar, showRoster, showChat } = useNavigation();

  return (
    <UserActivityProvider>
      <StyledLayout showNav={showNavbar} showRoster={showRoster || showChat}>
      <RealitimeSubscribeStateProvider>
        <StyledContent>
          <MeetingMetrics />
          <VideoTileGrid
            className="videos"
            noRemoteVideoView={<MeetingDetails />}
          />
          <MeetingControls />
        </StyledContent>
        <NavigationControl />
        </RealitimeSubscribeStateProvider>
      </StyledLayout>
    </UserActivityProvider>
  );
};

export default MeetingView;
