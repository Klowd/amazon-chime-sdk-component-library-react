// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef, useState } from 'react';
export function useFocusIn(el, delay) {
    if (delay === void 0) { delay = 3000; }
    var timeoutRef = useRef(null);
    var _a = useState(false), isFocused = _a[0], setIsFocused = _a[1];
    useEffect(function () {
        if (!el.current) {
            return;
        }
        var onFocusIn = function () {
            clearTimeout(timeoutRef.current);
            setIsFocused(true);
        };
        var onFocusOut = function () {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(function () {
                setIsFocused(false);
            }, delay);
        };
        el.current.addEventListener('focusin', onFocusIn);
        el.current.addEventListener('focusout', onFocusOut);
        return function () {
            el.current.removeEventListener('focusin', onFocusIn);
            el.current.removeEventListener('focusout', onFocusOut);
        };
    }, [el]);
    return { isFocused: isFocused };
}
export default useFocusIn;
//# sourceMappingURL=index.js.map