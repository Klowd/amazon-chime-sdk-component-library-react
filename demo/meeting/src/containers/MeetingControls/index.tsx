// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioInputControl,
  AudioOutputControl,
  ContentShareControl,
  ControlBar,
  ControlBarButton,
  Dots,
  VideoInputControl,
  useUserActivityState
} from 'amazon-chime-sdk-component-library-react';

import EndMeetingControl from '../EndMeetingControl';
import React from 'react';
import { StyledControls } from './Styled';
import { useNavigation } from '../../providers/NavigationProvider';

const MeetingControls = () => {
  const { toggleNavbar, closeRoster, showRoster } = useNavigation();
  const { isUserActive } = useUserActivityState();

  const handleToggle = () => {
    if (showRoster) {
      closeRoster();
    }

    toggleNavbar();
  };

  return (
    <StyledControls className="controls" active={!!isUserActive}>
      <ControlBar
        className="controls-menu"
        layout="undocked-horizontal"
        showLabels
      >
        <ControlBarButton
          className="mobile-toggle"
          icon={<Dots />}
          onClick={handleToggle}
          label="Menu"
        />
        <AudioInputControl />
        <VideoInputControl />
        <ContentShareControl />
        <AudioOutputControl />
        <EndMeetingControl />
      </ControlBar>
    </StyledControls>
  );
};

export default MeetingControls;
