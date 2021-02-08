// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Camera } from '../../ui/icons';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import React from 'react';
import { isOptionActive } from '../../../utils/device-utils';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import useSelectVideoInputDevice from '../../../hooks/sdk/useSelectVideoInputDevice';
import { useVideoInputs } from '../../../providers/DevicesProvider';
var videoInputConfig = {
    additionalDevices: true
};
var VideoInputControl = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Video' : _b;
    var _c = useVideoInputs(videoInputConfig), devices = _c.devices, selectedDevice = _c.selectedDevice;
    var _d = useLocalVideo(), isVideoEnabled = _d.isVideoEnabled, toggleVideo = _d.toggleVideo;
    var selectDevice = useSelectVideoInputDevice();
    var dropdownOptions = devices.map(function (device) { return ({
        children: React.createElement("span", null, device.label),
        checked: isOptionActive(selectedDevice, device.deviceId),
        onClick: function () { return selectDevice(device.deviceId); }
    }); });
    return (React.createElement(ControlBarButton, { icon: React.createElement(Camera, { disabled: !isVideoEnabled }), onClick: toggleVideo, label: label, popOver: dropdownOptions }));
};
export default VideoInputControl;
//# sourceMappingURL=VideoInputControl.js.map