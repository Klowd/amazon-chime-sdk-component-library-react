// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useContext, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import { DevicesProvider } from '../DevicesProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { LogLevel } from 'amazon-chime-sdk-js';
import MeetingManager from './MeetingManager';
import { PostLogConfig } from './types';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { RosterProvider } from '../RosterProvider';

interface Props {
  /** Determines how verbose the logging statements will be */
  logLevel?: LogLevel;
  /** Configuration for a MeetingSessionPOSTLogger */
  postLogConfig?: PostLogConfig;
  /** Whether or not to enable simulcast for the meeting session */
  simulcastEnabled?: boolean;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

export const MeetingProvider: React.FC<Props> = ({
  logLevel = LogLevel.WARN,
  postLogConfig,
  simulcastEnabled = false,
  children,
}) => {
  const [meetingManager] = useState(
    () => new MeetingManager({ logLevel, postLogConfig, simulcastEnabled })
  );

  return (
    <MeetingContext.Provider value={meetingManager}>
      <AudioVideoProvider>
        <DevicesProvider>
          <RosterProvider>
            <RemoteVideoTileProvider>
              <LocalVideoProvider>
                <LocalAudioOutputProvider>
                  <ContentShareProvider>
                    <FeaturedVideoTileProvider>
                      {children}
                    </FeaturedVideoTileProvider>
                  </ContentShareProvider>
                </LocalAudioOutputProvider>
              </LocalVideoProvider>
            </RemoteVideoTileProvider>
          </RosterProvider>
        </DevicesProvider>
      </AudioVideoProvider>
    </MeetingContext.Provider>
  );
};

export const useMeetingManager = (): MeetingManager => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error('useMeetingManager must be used within MeetingProvider');
  }

  return meetingManager;
};
