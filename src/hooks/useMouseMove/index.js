// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef, useState } from 'react';
export function useMouseMove(el, delay) {
    if (delay === void 0) { delay = 3000; }
    var timeoutRef = useRef(null);
    var _a = useState(false), isMouseMoving = _a[0], setIsMouseActive = _a[1];
    useEffect(function () {
        if (!el.current) {
            return;
        }
        var onMouseMove = function () {
            clearTimeout(timeoutRef.current);
            setIsMouseActive(true);
            timeoutRef.current = setTimeout(function () {
                setIsMouseActive(false);
            }, delay);
        };
        el.current.addEventListener('mousemove', onMouseMove);
        return function () {
            el.current.removeEventListener('mousemove', onMouseMove);
        };
    }, [el]);
    return { isMouseMoving: isMouseMoving };
}
export default useMouseMove;
//# sourceMappingURL=index.js.map