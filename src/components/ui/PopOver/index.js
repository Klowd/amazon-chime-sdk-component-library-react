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
import { Manager, Popper, Reference } from 'react-popper';
import React, { createRef, useEffect, useState, } from 'react';
import { StyledPopOverMenu, StyledPopOverToggle } from './Styled';
import { KEY_CODES } from '../../../constants';
import classnames from 'classnames';
import useClickOutside from '../../../hooks/useClickOutside';
import useTabOutside from '../../../hooks/useTabOutside';
var getFocusableElements = function (node) {
    return node.querySelectorAll('button, [href]');
};
export var PopOver = function (_a) {
    var renderButton = _a.renderButton, renderButtonWrapper = _a.renderButtonWrapper, children = _a.children, _b = _a.isSubMenu, isSubMenu = _b === void 0 ? false : _b, _c = _a.placement, placement = _c === void 0 ? 'bottom-start' : _c, a11yLabel = _a.a11yLabel, className = _a.className, rest = __rest(_a, ["renderButton", "renderButtonWrapper", "children", "isSubMenu", "placement", "a11yLabel", "className"]);
    var menuRef = createRef();
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    useEffect(function () {
        if (isOpen && !!menuRef.current) {
            var nodes = getFocusableElements(menuRef.current);
            !!nodes && nodes[0].focus();
        }
    }, [isOpen]);
    var move = function (direction) {
        var node = menuRef.current;
        if (isSubMenu) {
            // the parent menu can access
            // child nodes and manage focused elements
            return;
        }
        if (!!node) {
            var nodes = getFocusableElements(node);
            var currentElement = document.activeElement;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i] === currentElement) {
                    if (direction === 'down' && i !== nodes.length - 1) {
                        return nodes[i + 1].focus();
                    }
                    if (direction === 'up' && i > 0) {
                        return nodes[i - 1].focus();
                    }
                    break;
                }
            }
        }
    };
    var closePopover = function (e) {
        var isSubMenuButton = e.target.closest("[data-menu='submenu']");
        return !isSubMenuButton ? setIsOpen(false) : false;
    };
    var handleKeyUp = function (e) {
        switch (e.keyCode) {
            case KEY_CODES.ESCAPE:
                return setIsOpen(false);
            case KEY_CODES.ARROW_UP:
                return move('up');
            case KEY_CODES.ARROW_DOWN:
                return move('down');
        }
    };
    useClickOutside(menuRef, function () { return setIsOpen(false); });
    useTabOutside(menuRef, function () { return setIsOpen(false); });
    return (React.createElement("span", { ref: menuRef, onKeyDown: handleKeyUp, "data-testid": "popover" },
        React.createElement(Manager, null,
            React.createElement(Reference, null, function (_a) {
                var ref = _a.ref;
                var props = {
                    ref: ref,
                    className: classnames(className, 'ch-popover-toggle'),
                    onClick: function () { return setIsOpen(!isOpen); },
                    'data-menu': isSubMenu ? 'submenu' : null,
                    'aria-label': a11yLabel,
                    'aria-haspopup': true,
                    'aria-expanded': isOpen,
                    'data-testid': 'popover-toggle',
                };
                if (renderButton) {
                    return (React.createElement(StyledPopOverToggle, __assign({}, props), renderButton(isOpen)));
                }
                if (renderButtonWrapper) {
                    return renderButtonWrapper(isOpen, props);
                }
                return null;
            }),
            isOpen && (React.createElement(Popper, __assign({ placement: placement, modifiers: [{ name: 'offset', options: { offset: [-8, 0] } }] }, rest), function (_a) {
                var ref = _a.ref, style = _a.style, placement = _a.placement;
                return (React.createElement(StyledPopOverMenu, { "data-placement": placement, onClick: function (e) { return closePopover(e); }, ref: ref, style: style, "data-testid": "menu" }, children));
            })))));
};
export default PopOver;
//# sourceMappingURL=index.js.map