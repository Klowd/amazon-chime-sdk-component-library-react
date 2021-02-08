// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import React from 'react';
import { ScreenShare } from '../../ui/icons';
import { useContentShareControls } from '../../../providers/ContentShareProvider';
import { useContentShareState } from '../../../providers/ContentShareProvider';
var ContentShareControl = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Content' : _b, _c = _a.pauseLabel, pauseLabel = _c === void 0 ? 'Pause' : _c, _d = _a.unpauseLabel, unpauseLabel = _d === void 0 ? 'Unpause' : _d;
    var isLocalUserSharing = useContentShareState().isLocalUserSharing;
    var _e = useContentShareControls(), paused = _e.paused, toggleContentShare = _e.toggleContentShare, togglePauseContentShare = _e.togglePauseContentShare;
    var dropdownOptions = [
        {
            children: React.createElement("span", null, paused ? unpauseLabel : pauseLabel),
            onClick: togglePauseContentShare,
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(ControlBarButton, { icon: React.createElement(ScreenShare, null), onClick: toggleContentShare, label: label, popOver: isLocalUserSharing ? dropdownOptions : null })));
};
export default ContentShareControl;
//# sourceMappingURL=ContentShareControl.js.map