// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useState } from 'react';
import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import { DevicesProvider } from '../DevicesProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { LogLevel } from 'amazon-chime-sdk-js';
import MeetingManager from './MeetingManager';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { RosterProvider } from '../RosterProvider';
export var MeetingContext = createContext(null);
export var MeetingProvider = function (_a) {
    var _b = _a.logLevel, logLevel = _b === void 0 ? LogLevel.WARN : _b, postLogConfig = _a.postLogConfig, _c = _a.simulcastEnabled, simulcastEnabled = _c === void 0 ? false : _c, children = _a.children;
    var meetingManager = useState(function () { return new MeetingManager({ logLevel: logLevel, postLogConfig: postLogConfig, simulcastEnabled: simulcastEnabled }); })[0];
    return (React.createElement(MeetingContext.Provider, { value: meetingManager },
        React.createElement(AudioVideoProvider, null,
            React.createElement(DevicesProvider, null,
                React.createElement(RosterProvider, null,
                    React.createElement(RemoteVideoTileProvider, null,
                        React.createElement(LocalVideoProvider, null,
                            React.createElement(LocalAudioOutputProvider, null,
                                React.createElement(ContentShareProvider, null,
                                    React.createElement(FeaturedVideoTileProvider, null, children))))))))));
};
export var useMeetingManager = function () {
    var meetingManager = useContext(MeetingContext);
    if (!meetingManager) {
        throw new Error('useMeetingManager must be used within MeetingProvider');
    }
    return meetingManager;
};
//# sourceMappingURL=index.js.map