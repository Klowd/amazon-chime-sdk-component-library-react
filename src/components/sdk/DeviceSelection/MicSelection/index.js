// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import DeviceInput from '../DeviceInput';
import React from 'react';
import { useAudioInputs } from '../../../../providers/DevicesProvider';
import { useSelectAudioInputDevice } from '../../../../hooks/sdk/useSelectAudioInputDevice';
export var MicSelection = function (_a) {
    var _b = _a.notFoundMsg, notFoundMsg = _b === void 0 ? 'No microphone devices found' : _b, _c = _a.label, label = _c === void 0 ? 'Microphone source' : _c;
    var selectAudioInput = useSelectAudioInputDevice();
    var _d = useAudioInputs(), devices = _d.devices, selectedDevice = _d.selectedDevice;
    return (React.createElement(DeviceInput, { label: label, onChange: selectAudioInput, devices: devices, selectedDeviceId: selectedDevice, notFoundMsg: notFoundMsg }));
};
export default MicSelection;
//# sourceMappingURL=index.js.map