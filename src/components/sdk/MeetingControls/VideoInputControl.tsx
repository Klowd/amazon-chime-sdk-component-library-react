// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect } from 'react';

import { Camera } from '../../ui/icons';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { DeviceConfig } from '../../../types';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { isOptionActive } from '../../../utils/device-utils';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import useSelectVideoInputDevice from '../../../hooks/sdk/useSelectVideoInputDevice';
import { useVideoInputs } from '../../../providers/DevicesProvider';

interface Props {
  /** The label that will be shown for video input control, it defaults to `Video`. */
  label?: string;
  onByDefault?: boolean;
}

const videoInputConfig: DeviceConfig = {
  additionalDevices: true
};

const VideoInputControl: React.FC<Props> = ({ label = 'Video', onByDefault = false }) => {
  const { devices, selectedDevice } = useVideoInputs(videoInputConfig);
  const { isVideoEnabled, toggleVideo, audioVideo } = useLocalVideo();
  const selectDevice = useSelectVideoInputDevice();

  const dropdownOptions: PopOverItemProps[] = devices.map((device: any) => ({
    children: <span>{device.label}</span>,
    checked: isOptionActive(selectedDevice, device.deviceId),
    onClick: () => selectDevice(device.deviceId)
  }));

  useEffect(() => {
    if (audioVideo && onByDefault) {
      toggleVideo();
    }
  }, [audioVideo]);

  return (
    <ControlBarButton
      icon={<Camera disabled={!isVideoEnabled} />}
      onClick={toggleVideo}
      label={label}
      popOver={dropdownOptions}
    />
  );
};

export default VideoInputControl;
