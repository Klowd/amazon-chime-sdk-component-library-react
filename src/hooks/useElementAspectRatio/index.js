// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useLayoutEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'throttle-debounce';
// Todo - Use a defined range per aspect ratio, instead of the specific ratio value
function getAspectRatio(height, width) {
    var aspectRatio = width / height;
    if (aspectRatio > 1.6) {
        return 'r16by9';
    }
    if (aspectRatio > 1.4) {
        return 'r3by2';
    }
    if (aspectRatio > 1.25) {
        return 'r4by3';
    }
    if (aspectRatio > 0.9) {
        return 'r1by1';
    }
    if (aspectRatio > 0.7) {
        return 'r2by3';
    }
    if (aspectRatio > 0.4) {
        return 'r1by2';
    }
    return 'slim';
}
export var useElementAspectRatio = function (ref) {
    var _a = useState(null), ratio = _a[0], setRatio = _a[1];
    useLayoutEffect(function () {
        if (!ref.current) {
            return;
        }
        var _a = ref.current.getBoundingClientRect(), height = _a.height, width = _a.width;
        setRatio(getAspectRatio(height, width));
    }, []);
    useEffect(function () {
        if (!ref.current) {
            return;
        }
        var handleResize = debounce(50, function (entries) {
            var _a = entries[0].contentRect, height = _a.height, width = _a.width;
            setRatio(getAspectRatio(height, width));
        });
        var resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(ref.current);
        return function () { return resizeObserver.disconnect(); };
    }, []);
    return ratio;
};
export default useElementAspectRatio;
//# sourceMappingURL=index.js.map