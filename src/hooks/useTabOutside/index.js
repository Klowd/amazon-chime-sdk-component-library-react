// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect } from 'react';
export function useTabOutside(ref, onTabOutside) {
    var isOutside = function () {
        return !!ref.current && !ref.current.contains(document.activeElement);
    };
    var keyUp = function (e) {
        if (e.keyCode === 9 && isOutside()) {
            return onTabOutside(e);
        }
    };
    useEffect(function () {
        document.addEventListener('keyup', keyUp);
        return function () {
            document.removeEventListener('keyup', keyUp);
        };
    }), [onTabOutside];
}
export default useTabOutside;
//# sourceMappingURL=index.js.map