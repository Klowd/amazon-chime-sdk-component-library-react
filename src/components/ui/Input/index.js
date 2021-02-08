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
import React, { forwardRef, useEffect, useRef, useState, } from 'react';
import { StyledClear, StyledInput } from './Styled';
import { Clear } from '../icons';
import InputWrapper from './InputWrapper';
export var Input = forwardRef(function (props, externalRef) {
    var type = props.type, value = props.value, sizing = props.sizing, onClear = props.onClear, onChange = props.onChange, className = props.className, leadingIcon = props.leadingIcon, _a = props.showClear, showClear = _a === void 0 ? true : _a, rest = __rest(props, ["type", "value", "sizing", "onClear", "onChange", "className", "leadingIcon", "showClear"]);
    var _b = useState(false), focused = _b[0], setFocused = _b[1];
    var focusedRef = useRef(false);
    var internalRef = useRef(null);
    var inputRef = (externalRef || internalRef);
    var clearRef = useRef(null);
    var label = props['aria-label']
        ? "clear " + props['aria-label']
        : 'clear';
    var handleClear = function () {
        var _a;
        if (onClear) {
            onClear();
            return;
        }
        var input = inputRef.current;
        var nativeSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
        if (nativeSetter && input) {
            nativeSetter.call(input, '');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.focus();
    };
    useEffect(function () {
        var blurring = false;
        var onFocus = function (e) {
            if (!focusedRef.current) {
                return;
            }
            if (e.target !== clearRef.current && e.target !== inputRef.current) {
                focusedRef.current = false;
                setFocused(false);
                return;
            }
            if (blurring) {
                blurring = false;
            }
        };
        var onFocusOut = function (e) {
            if (!focusedRef.current) {
                return;
            }
            blurring = true;
            setTimeout(function () {
                if (blurring) {
                    focusedRef.current = false;
                    setFocused(false);
                }
                blurring = false;
            }, 10);
        };
        document.addEventListener('focusin', onFocus);
        document.addEventListener('focusout', onFocusOut);
        return function () {
            document.removeEventListener('focusin', onFocus);
            document.removeEventListener('focusout', onFocusOut);
        };
    }, []);
    return (React.createElement(InputWrapper, { leadingIcon: leadingIcon, sizing: sizing, className: "ch-input-wrapper " + (className || '') },
        React.createElement(StyledInput, __assign({}, rest, { value: value, type: type || 'text', ref: inputRef, className: "ch-input", onChange: onChange, "data-testid": "input", onFocus: function () {
                focusedRef.current = true;
                setFocused(true);
            } })),
        showClear && (React.createElement(StyledClear, { type: "button", active: !!(onClear || (focused && value.length)), tabIndex: -1, "aria-label": label, onClick: handleClear, ref: clearRef },
            React.createElement(Clear, { width: "1.25rem" })))));
});
Input.displayName = 'Input';
export default Input;
//# sourceMappingURL=index.js.map