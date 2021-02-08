// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { Microphone } from '../../ui/icons';
import React from 'react';
import { isOptionActive } from '../../../utils/device-utils';
import { useAudioInputs } from '../../../providers/DevicesProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
import { useToggleLocalMute } from '../../../hooks/sdk/useToggleLocalMute';
var AudioInputControl = function (_a) {
    var _b = _a.muteLabel, muteLabel = _b === void 0 ? 'Mute' : _b, _c = _a.unmuteLabel, unmuteLabel = _c === void 0 ? 'Unmute' : _c;
    var meetingManager = useMeetingManager();
    var _d = useToggleLocalMute(), muted = _d.muted, toggleMute = _d.toggleMute;
    var audioInputConfig = {
        additionalDevices: true
    };
    var _e = useAudioInputs(audioInputConfig), devices = _e.devices, selectedDevice = _e.selectedDevice;
    var dropdownOptions = devices.map(function (device) { return ({
        children: React.createElement("span", null, device.label),
        checked: isOptionActive(selectedDevice, device.deviceId),
        onClick: function () {
            return meetingManager.selectAudioInputDevice(device.deviceId);
        }
    }); });
    return (React.createElement(ControlBarButton, { icon: React.createElement(Microphone, { muted: muted }), onClick: toggleMute, label: muted ? unmuteLabel : muteLabel, popOver: dropdownOptions }));
};
export default AudioInputControl;
//# sourceMappingURL=AudioInputControl.js.map