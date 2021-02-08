// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { space } from 'styled-system';
export var baseStyles = function (_a) {
    var css = _a.css;
    return css ? "@media { " + css + " };" : '';
};
export var baseSpacing = function (props) { return space(props); };
//# sourceMappingURL=index.js.map