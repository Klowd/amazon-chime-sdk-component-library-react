// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { DefaultDeviceController } from 'amazon-chime-sdk-js';
export var getFormattedDropdownDeviceOptions = function (jsonObject) {
    var formattedJSONObject = Object.entries(jsonObject).map(function (entry) { return ({
        deviceId: entry[0].toLowerCase(),
        label: entry[1]
    }); });
    return formattedJSONObject;
};
export var videoInputSelectionToDevice = function (deviceId) {
    if (deviceId === 'blue') {
        return DefaultDeviceController.synthesizeVideoDevice('blue');
    }
    if (deviceId === 'smpte') {
        return DefaultDeviceController.synthesizeVideoDevice('smpte');
    }
    if (deviceId === 'none') {
        return null;
    }
    return deviceId;
};
export var audioInputSelectionToDevice = function (deviceId) {
    if (deviceId === '440') {
        return DefaultDeviceController.synthesizeAudioDevice(440);
    }
    if (deviceId === 'none') {
        return null;
    }
    return deviceId;
};
export var isOptionActive = function (meetingManagerDeviceId, currentDeviceId) {
    if (currentDeviceId === 'none' && meetingManagerDeviceId === null) {
        return true;
    }
    return currentDeviceId === meetingManagerDeviceId;
};
//# sourceMappingURL=device-utils.js.map