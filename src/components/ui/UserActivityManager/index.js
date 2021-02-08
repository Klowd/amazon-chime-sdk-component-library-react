// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { StyledUserActivityManager } from './Styled';
import { useUserActivityState } from '../../../providers/UserActivityProvider';
export var UserActivityManager = function (_a) {
    var children = _a.children;
    var isUserActive = useUserActivityState().isUserActive;
    return (React.createElement(StyledUserActivityManager, { isActive: isUserActive, className: "" + (isUserActive ? 'ch-active' : '') }, children));
};
UserActivityManager.displayName = 'UserActivityManager';
export default UserActivityManager;
//# sourceMappingURL=index.js.map