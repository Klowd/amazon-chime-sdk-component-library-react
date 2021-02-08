// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback } from 'react';
import useLocalAudioInputActivity from './useLocalAudioInputActivity';
export var useLocalAudioInputActivityPreview = function (elementRef, scaleDirection) {
    if (scaleDirection === void 0) { scaleDirection = 'horizontal'; }
    var cb = useCallback(function (decimal) {
        if (elementRef.current) {
            elementRef.current.style.transform =
                scaleDirection === 'horizontal'
                    ? "scaleX(" + decimal + ")"
                    : "scaleY(" + decimal + ")";
        }
    }, [scaleDirection]);
    useLocalAudioInputActivity(cb);
};
export default useLocalAudioInputActivityPreview;
//# sourceMappingURL=useLocalAudioInputActivityPreview.js.map