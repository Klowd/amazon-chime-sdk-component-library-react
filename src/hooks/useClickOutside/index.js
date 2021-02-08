// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect } from 'react';
export function useClickOutside(ref, onClickOutside) {
    var isOutside = function (e) {
        return !!ref.current && !ref.current.contains(e.target);
    };
    var onMouseDown = function (e) {
        if (isOutside(e)) {
            onClickOutside(e);
        }
    };
    useEffect(function () {
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('touchstart', onMouseDown);
        return function () {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('touchstart', onMouseDown);
        };
    }), [onClickOutside];
}
export default useClickOutside;
//# sourceMappingURL=index.js.map