// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { createContext, useContext } from 'react';
export var ControlBarContext = createContext({
    showLabels: false,
    layout: 'top',
});
export var useControlBarContext = function () {
    return useContext(ControlBarContext);
};
export default ControlBarContext;
//# sourceMappingURL=ControlBarContext.js.map