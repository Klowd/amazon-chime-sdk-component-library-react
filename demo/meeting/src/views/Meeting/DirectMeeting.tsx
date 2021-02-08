// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as styles from './style.scss';

import React, { useEffect } from 'react';
import {
  UserActivityProvider,
  VideoTileGrid,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';
import {
  createGetAttendeeCallback,
  fetchMeeting,
  getNearestRegion,
  getQueryVariable,
} from '../../utils/api';

import MeetingControls from '../../containers/MeetingControls';
import MeetingDetails from '../../containers/MeetingDetails';
import MeetingMetrics from '../../containers/MeetingMetrics';
import NavigationControl from '../../containers/Navigation/NavigationControl';
import { RealitimeSubscribeStateProvider } from '../../providers/RealtimeSubscribeProvider';
import { useAppState } from '../../providers/AppStateProvider';
// import { useAppState } from '../../providers/AppStateProvider';
import { useHistory } from 'react-router-dom';
import useMeetingEndRedirect from '../../hooks/useMeetingEndRedirect';
import { useNavigation } from '../../providers/NavigationProvider';

const DirectMeeting = () => {
  const { setAppMeetingInfo, meetingId } = useAppState();

  const history = useHistory();

  const meetingManager = useMeetingManager();

  useMeetingEndRedirect();

  const { showNavbar, showRoster, showChat, toggleRoster } = useNavigation();

  const fetchData = React.useCallback(async (): Promise<void> => {
    const region = await getNearestRegion();
    const id = getQueryVariable('m', history.location);
    const attendeeName = decodeURIComponent(
      getQueryVariable('n', history.location)
    );
    setAppMeetingInfo(id, attendeeName, region);
    meetingManager.getAttendee = createGetAttendeeCallback(id);
    try {
      const { JoinInfo } = await fetchMeeting(id, attendeeName, region);
      await meetingManager.join({
        meetingInfo: JoinInfo.Meeting,
        attendeeInfo: JoinInfo.Attendee,
      });
      await meetingManager.start();
    } catch (error) {}
  }, [history.location, meetingManager, setAppMeetingInfo]);

  useEffect(() => {
    toggleRoster();

    fetchData();
  }, []);

  return (
    <UserActivityProvider>
      <div className={styles.StyledLayout} showNav={showNavbar} showRoster={showRoster || showChat}>
        <RealitimeSubscribeStateProvider>
          <div className={styles.StyledContent}>
            <MeetingMetrics />
            <VideoTileGrid
              className="videos"
              noRemoteVideoView={
                <MeetingDetails
                  type={getQueryVariable('t', history.location)}
                />
              }
            />
            <MeetingControls
              type={getQueryVariable('t', history.location)}
              meetingId={meetingId}
            />
          </div>
          <NavigationControl />
        </RealitimeSubscribeStateProvider>
      </div>
    </UserActivityProvider>
  );
};

export default DirectMeeting;