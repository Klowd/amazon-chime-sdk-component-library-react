// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect } from 'react';
export function useApplyVideoObjectFit(videoEl) {
    useEffect(function () {
        var _a;
        function onLoaded() {
            if (!videoEl.current) {
                return;
            }
            var height = videoEl.current.videoHeight;
            var width = videoEl.current.videoWidth;
            videoEl.current.style.objectFit = height > width ? 'contain' : 'cover';
        }
        (_a = videoEl.current) === null || _a === void 0 ? void 0 : _a.addEventListener('loadedmetadata', onLoaded);
        return function () { var _a; return (_a = videoEl.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('loadedmetadata', onLoaded); };
    }, [videoEl]);
}
export default useApplyVideoObjectFit;
//# sourceMappingURL=index.js.map