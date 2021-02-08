// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { StyledName } from './Styled';
var RosterName = function (_a) {
    var name = _a.name, subtitle = _a.subtitle;
    return (React.createElement(StyledName, null,
        React.createElement("div", { className: "ch-name" }, name),
        subtitle && React.createElement("div", { className: "ch-subtitle" }, subtitle)));
};
export default RosterName;
//# sourceMappingURL=RosterName.js.map