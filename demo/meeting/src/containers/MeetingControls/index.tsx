/* eslint-disable no-unused-expressions */
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
  useAudioVideo,
  useUserActivityState,
} from 'amazon-chime-sdk-component-library-react';
import React, { useEffect } from 'react';

import { DataMessage } from 'amazon-chime-sdk-js';
/* import EndMeetingControl from '../EndMeetingControl'; */
import MuteAllControl from '../MuteAllControl';
import { StyledControls } from './Styled';
import { useLocalVideo } from '../../../../../src/providers/LocalVideoProvider';
import { useNavigation } from '../../providers/NavigationProvider';

const ControlsByType = {
  moderator: (
    <>
      <AudioInputControl />
      <VideoInputControl onByDefault />
      <ContentShareControl />
      <AudioOutputControl />
      <MuteAllControl />
      {/* <EndMeetingControl /> */}
    </>
  ),
  attendee: (
    <>
      <AudioInputControl defaultMuted />
      <VideoInputControl onByDefault={false} />
      <AudioOutputControl />
    </>
  ),
  chat: (
    <>
      <AudioInputControl />
      <AudioOutputControl />
      <VideoInputControl onByDefault />
    </>
  ),
};

interface Props {
  type?: string;
  meetingId?: string;
}

const MeetingControls: React.FC<Props> = ({ type, meetingId = null }) => {
  const {
    toggleNavbar,
    closeRoster,
    showRoster,
    showChat,
    closeChat,
  } = useNavigation();
  const { isUserActive } = useUserActivityState();
  const audioVideo = useAudioVideo();
  const { isVideoEnabled, toggleVideo } = useLocalVideo();
  const handleToggle = (): void => {
    if (showRoster) {
      closeRoster();
    }

    if (showChat) {
      closeChat();
    }

    toggleNavbar();
  };

  const onMuteEvent = React.useCallback(
    (eventData: DataMessage): void => {
      const data = JSON.parse(eventData.text());
      console.log('data', data);
      const muted = audioVideo?.realtimeIsLocalAudioMuted() || false;
      // const videoEnabled = audioVideo?.hasStartedLocalVideoTile() || false;
      if (meetingId && data.meetingId === meetingId) {
        if (!muted) {
          audioVideo?.realtimeMuteLocalAudio();
        }

        if (isVideoEnabled) {
          toggleVideo();
        }
      }
    },
    [audioVideo, isVideoEnabled, meetingId, toggleVideo]
  );

  useEffect(() => {
    if (type && type !== 'moderator' && audioVideo) {
      audioVideo?.realtimeSubscribeToReceiveDataMessage(
        'MUTE_ALL',
        onMuteEvent
      );
    }
    return (): void => {
      audioVideo?.realtimeUnsubscribeFromReceiveDataMessage('MUTE_ALL');
    };
  }, [type, audioVideo, onMuteEvent]);

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
        {type ? ControlsByType[type] : ControlsByType.moderator}
      </ControlBar>
    </StyledControls>
  );
};

export default MeetingControls;
