// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import memoize from 'fast-memoize';
var formatDateUnmemoized = function (dateStr, locale, dateOptions, todayText, yesterdayText) {
    var options = dateOptions ? dateOptions : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date(dateStr).toLocaleDateString(locale, options);
    var today = new Date().toLocaleDateString(locale, options);
    var yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString(locale, options);
    if (date === yesterday) {
        return yesterdayText || 'Yesterday';
    }
    else if (date === today) {
        return todayText || 'Today';
    }
    return (date);
};
export var formatDate = memoize(formatDateUnmemoized);
//# sourceMappingURL=formatDate.js.map