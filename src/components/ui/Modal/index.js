// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef } from 'react';
import { KEY_CODES } from '../../../constants';
import ModalContext from './ModalContext';
import Portal from '../Portal';
import { StyledModal } from './Styled';
import trapFocus from '../../../utils/trap-focus';
import useClickOutside from '../../../hooks/useClickOutside';
import useUniqueId from '../../../hooks/useUniqueId';
export var Modal = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, onClose = _a.onClose, children = _a.children, rootId = _a.rootId, rest = __rest(_a, ["size", "onClose", "children", "rootId"]);
    var labelID = useUniqueId();
    var contentEl = useRef(null);
    var mainEl = useRef(null);
    var modalContext = { onClose: onClose, labelID: labelID };
    useClickOutside(mainEl, onClose);
    useEffect(function () {
        // return focus to the element that triggered the
        // modal when the modal closes
        var activeNode = document.activeElement;
        return function () { return !!activeNode && activeNode.focus(); };
    }, []);
    useEffect(function () {
        // ensure that the focus event fires after Portal render is complete
        setTimeout(function () { var _a; return (_a = mainEl.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
        var onKeydown = function (e) {
            if (e.keyCode === KEY_CODES.ESCAPE && onClose) {
                onClose();
            }
            else {
                trapFocus(e, contentEl.current);
            }
        };
        window.addEventListener('keydown', function (e) { return onKeydown(e); });
        return function () { return window.removeEventListener('keydown', function (e) { return onKeydown(e); }); };
    }, []);
    return (React.createElement(Portal, { rootId: rootId },
        React.createElement(ModalContext.Provider, { value: modalContext },
            React.createElement(StyledModal, __assign({}, rest, { size: size, onClose: onClose, ref: contentEl, "data-testid": "modal" }),
                React.createElement("section", { "aria-modal": true, ref: mainEl, role: "dialog", tabIndex: 0, "aria-labelledby": labelID }, children)))));
};
export default Modal;
//# sourceMappingURL=index.js.map