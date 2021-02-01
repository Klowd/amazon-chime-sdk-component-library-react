// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { DeviceConfig } from '../../../types';
import { Microphone } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import React from 'react';
import { isOptionActive } from '../../../utils/device-utils';
import { useAudioInputs } from '../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useToggleLocalMute } from '../../../hooks/sdk/useToggleLocalMute';

interface Props {
  /** The label that will be shown when microphone is muted , it defaults to `Mute`. */
  muteLabel?: string;
  /** The label that will be shown when microphone is unmuted, it defaults to `Unmute`. */
  unmuteLabel?: string;
}

const AudioInputControl: React.FC<Props> = ({
  muteLabel = 'Mute',
  unmuteLabel = 'Unmute'
}) => {
  const meetingManager = useMeetingManager();
  const { muted, toggleMute } = useToggleLocalMute();
  const audioInputConfig: DeviceConfig = {
    additionalDevices: true
  };
  const { devices, selectedDevice } = useAudioInputs(audioInputConfig);

  const dropdownOptions: PopOverItemProps[] = devices.map(device => ({
    children: <span>{device.label}</span>,
    checked: isOptionActive(selectedDevice, device.deviceId),
    onClick: (): Promise<void> =>
      meetingManager.selectAudioInputDevice(device.deviceId)
  }));

  return (
    <ControlBarButton
      icon={<Microphone muted={muted} />}
      onClick={toggleMute}
      label={muted ? unmuteLabel : muteLabel}
      popOver={dropdownOptions}
    />
  );
};

export default AudioInputControl;
