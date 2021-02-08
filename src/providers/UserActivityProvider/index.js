// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { createContext, useContext, useMemo, useRef } from 'react';
import useFocusIn from '../../hooks/useFocusIn';
import useMouseMove from '../../hooks/useMouseMove';
export var UserActivityContext = createContext(null);
var UserActivityProvider = function (_a) {
    var children = _a.children;
    var ref = useRef(null);
    var isFocused = useFocusIn(ref).isFocused;
    var isMouseMoving = useMouseMove(ref).isMouseMoving;
    var isUserActive = isFocused || isMouseMoving;
    var value = useMemo(function () { return ({
        isUserActive: isUserActive
    }); }, [isUserActive]);
    return (React.createElement("div", { ref: ref },
        React.createElement(UserActivityContext.Provider, { value: value }, children)));
};
function useUserActivityState() {
    var state = useContext(UserActivityContext);
    if (!state) {
        throw new Error('useUserActivityState must be used within an UserActivityContextProvider');
    }
    return state;
}
export { UserActivityProvider, useUserActivityState };
//# sourceMappingURL=index.js.map