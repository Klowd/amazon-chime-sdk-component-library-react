// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { DevicePermissionStatus } from '../enums';
import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';
export default function useDevicePermissionStatus() {
    var meetingManager = useMeetingManager();
    var _a = useState(DevicePermissionStatus.UNSET), permission = _a[0], setPermission = _a[1];
    useEffect(function () {
        var callback = function (updatedPermission) {
            setPermission(updatedPermission);
        };
        meetingManager.subscribeToDevicePermissionStatus(callback);
        return function () {
            meetingManager.unsubscribeFromDevicePermissionStatus(callback);
        };
    }, [meetingManager]);
    return permission;
}
//# sourceMappingURL=useDevicePermissionStatus.js.map