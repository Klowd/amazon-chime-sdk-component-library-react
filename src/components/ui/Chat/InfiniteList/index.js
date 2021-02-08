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
import React, { useEffect, useRef, useState, } from 'react';
import { Spinner } from '../../icons';
import { StyledInfiniteList } from './Styled';
export var InfiniteList = function (props) {
    var isLoading = props.isLoading, onLoad = props.onLoad, items = props.items;
    var listEnd = useRef(null);
    var currentTopItemRef = useRef(null);
    var firstNew = useRef(null);
    var prevLength = useRef(items.length);
    var newLength = useRef(0);
    var onLoadRef = useRef(onLoad);
    onLoadRef.current = onLoad;
    var _a = useState(false), atBottom = _a[0], setAtBottom = _a[1];
    useEffect(function () {
        var _a;
        (_a = firstNew.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }, [items.length]);
    var topObserver = new IntersectionObserver(function (entries) {
        var topEntry = entries[0];
        if (topEntry.isIntersecting) {
            onLoadRef.current();
        }
    }, {
        threshold: 1,
    });
    useEffect(function () {
        var _a;
        (_a = listEnd.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        if (currentTopItemRef.current) {
            topObserver.observe(currentTopItemRef.current);
        }
        return function () {
            if (currentTopItemRef.current) {
                topObserver.unobserve(currentTopItemRef.current);
            }
        };
    }, []);
    if (items.length !== prevLength.current) {
        prevLength.current = newLength.current;
    }
    newLength.current = items.length;
    var getRef = function (index) {
        if (index === newLength.current - 1) {
            return newBottom;
        }
        else if (index === items.length - prevLength.current - 1 &&
            isLoading &&
            items.length !== prevLength.current) {
            return firstNew;
        }
        else {
            return null;
        }
    };
    var newBottom = useRef(null);
    var prevBottom;
    var messageList = items.map(function (item, i) { return (React.createElement("li", { id: i.toString(), key: i, ref: i === 0 ? currentTopItemRef : getRef(i), role: "article" }, item)); });
    var bottomObserver = new IntersectionObserver(function (entries) {
        var entry = entries[0];
        setAtBottom(entry.isIntersecting);
    }, {
        threshold: 0,
    });
    useEffect(function () {
        if (atBottom && listEnd.current) {
            listEnd.current.scrollIntoView();
        }
        prevBottom = newBottom.current;
        if (prevBottom) {
            bottomObserver.unobserve(prevBottom);
        }
        if (newBottom.current) {
            bottomObserver.observe(newBottom.current);
            prevBottom = newBottom.current;
        }
        return function () {
            if (prevBottom) {
                bottomObserver.unobserve(prevBottom);
            }
        };
    }, [items.length]);
    return (React.createElement(StyledInfiniteList, __assign({}, props, { className: "" + (isLoading ? 'ch-not-scrollable' : ''), "data-testid": "infinite-list", "aria-busy": isLoading ? true : false, role: "feed" }),
        isLoading && (React.createElement("li", { className: "ch-spinner" },
            React.createElement(Spinner, null))),
        messageList,
        React.createElement("div", { ref: listEnd })));
};
export default InfiniteList;
//# sourceMappingURL=index.js.map