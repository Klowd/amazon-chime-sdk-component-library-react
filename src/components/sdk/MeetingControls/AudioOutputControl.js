// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import React from 'react';
import { Sound } from '../../ui/icons';
import { isOptionActive } from '../../../utils/device-utils';
import { useAudioOutputs } from '../../../providers/DevicesProvider';
import { useLocalAudioOutput } from '../../../providers/LocalAudioOutputProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
var AudioOutputControl = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Speaker' : _b;
    var meetingManager = useMeetingManager();
    var _c = useAudioOutputs(), devices = _c.devices, selectedDevice = _c.selectedDevice;
    var _d = useLocalAudioOutput(), isAudioOn = _d.isAudioOn, toggleAudio = _d.toggleAudio;
    var dropdownOptions = devices.map(function (device) { return ({
        children: React.createElement("span", null, device.label),
        checked: isOptionActive(selectedDevice, device.deviceId),
        onClick: function () {
            return meetingManager.selectAudioOutputDevice(device.deviceId);
        }
    }); });
    return (React.createElement(React.Fragment, null,
        React.createElement(ControlBarButton, { icon: React.createElement(Sound, { disabled: !isAudioOn }), onClick: toggleAudio, label: label, popOver: dropdownOptions.length ? dropdownOptions : null })));
};
export default AudioOutputControl;
//# sourceMappingURL=AudioOutputControl.js.map