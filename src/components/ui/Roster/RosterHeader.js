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
import React, { useEffect, useRef, useState } from 'react';
import { Remove, Search } from '../icons';
import Badge from '../Badge';
import Flex from '../Flex';
import IconButton from '../Button/IconButton';
import { PopOverMenu } from './PopOverMenu';
import SearchInput from '../Input/SearchInput';
import { StyledHeader } from './Styled';
var SearchBar = function (_a) {
    var onChange = _a.onChange, onClose = _a.onClose, value = _a.value;
    var inputEl = useRef(null);
    var handleClear = function () {
        var _a;
        var input = inputEl.current;
        var nativeSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
        if (nativeSetter && input) {
            nativeSetter.call(input, '');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        onClose();
    };
    useEffect(function () {
        var _a;
        (_a = inputEl.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return (React.createElement(Flex, { container: true, alignItems: "center", className: "ch-search-wrapper" },
        React.createElement(SearchInput, { "aria-label": "Search", className: "ch-search-input", ref: inputEl, onChange: onChange, value: value, onClear: handleClear })));
};
export var RosterHeader = function (_a) {
    var tag = _a.tag, title = _a.title, badge = _a.badge, searchValue = _a.searchValue, onClose = _a.onClose, onSearch = _a.onSearch, className = _a.className, menu = _a.menu, _b = _a.a11yMenuLabel, a11yMenuLabel = _b === void 0 ? '' : _b, _c = _a.searchLabel, searchLabel = _c === void 0 ? 'Open search' : _c, children = _a.children, rest = __rest(_a, ["tag", "title", "badge", "searchValue", "onClose", "onSearch", "className", "menu", "a11yMenuLabel", "searchLabel", "children"]);
    var _d = useState(false), isSearching = _d[0], setIsSearching = _d[1];
    var searchBtn = useRef(null);
    var openSearch = function () {
        setIsSearching(true);
    };
    var closeSearch = function () {
        var _a;
        onSearch === null || onSearch === void 0 ? void 0 : onSearch({
            target: {
                value: '',
            },
            currentTarget: {
                value: '',
            },
        });
        setIsSearching(false);
        (_a = searchBtn.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (React.createElement(StyledHeader, __assign({ isSearching: isSearching, as: tag, className: className || '' }, rest),
        React.createElement("div", { className: "ch-title" }, title),
        typeof badge === 'number' && badge > -1 && (React.createElement(Badge, { className: "ch-badge", value: badge })),
        React.createElement("div", { className: "ch-buttons" },
            onSearch && (React.createElement(IconButton, { ref: searchBtn, label: searchLabel, onClick: openSearch, icon: React.createElement(Search, null) })),
            menu && React.createElement(PopOverMenu, { menu: menu, a11yMenuLabel: a11yMenuLabel }),
            children,
            onClose && (React.createElement(IconButton, { label: "Close", onClick: onClose, icon: React.createElement(Remove, null) }))),
        isSearching && (React.createElement(SearchBar, { value: searchValue, onClose: closeSearch, onChange: onSearch }))));
};
export default RosterHeader;
//# sourceMappingURL=RosterHeader.js.map