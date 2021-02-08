// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { KEY_CODES } from '../constants';
var trapFocus = function (e, content) {
    if (!content) {
        return;
    }
    var focusableElements = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    var firstFocusableEl = focusableElements[0];
    var lastFocusableEl = focusableElements[focusableElements.length - 1];
    if (e.keyCode === KEY_CODES.TAB) {
        if (e.shiftKey && document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
        }
        else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
        }
    }
};
export default trapFocus;
//# sourceMappingURL=trap-focus.js.map