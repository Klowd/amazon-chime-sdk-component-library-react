// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { baseSpacing, baseStyles } from '../Base';
import styled, { css } from 'styled-components';
var layoutMap = {
    'undocked-vertical': 'flex-direction: column;',
    'undocked-horizontal': 'flex-direction: row;',
    top: 'flex-direction: row; width: 100%; top: 0; position: fixed;',
    bottom: 'flex-direction: row; width: 100%; bottom: 0; position: fixed;',
    right: 'flex-direction: column; height: 100%; right: 0; position: fixed;',
    left: 'flex-direction: column; height: 100%; left: 0; position: fixed;'
};
var gridTemplateColumnMap = {
    popOver: 'grid-template-columns: 2.5rem minmax(0.5rem, auto);',
    'popOver&vertical': 'grid-template-columns: 1.5rem 1.5rem 1.5rem'
};
export var isVertical = function (layout) {
    return (layout === 'right' || layout === 'left' || layout === 'undocked-vertical');
};
export var isUndocked = function (layout) {
    return layout === 'undocked-vertical' || layout === 'undocked-horizontal';
};
var unsetPosition = {
    top: 'unset;',
    bottom: 'unset;',
    right: 'unset;',
    left: 'unset;'
};
export var responsiveStyles = function (props) {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["  \n    ", " {\n      ", "\n      ", ";\n      box-shadow: ", ";\n      border: none;\n      height: ", ";\n      width: ", ";\n    }\n\n    ", " {\n      justify-content: ", ";\n      ", "\n      ", ";\n      box-shadow: ", ";\n      border: none;\n    }\n  "], ["  \n    ", " {\n      ", "\n      ",
        ";\n      box-shadow: ", ";\n      border: none;\n      height: ", ";\n      width: ", ";\n    }\n\n    ", " {\n      justify-content: ",
        ";\n      ", "\n      ",
        ";\n      box-shadow: ", ";\n      border: none;\n    }\n  "])), function (_a) {
        var theme = _a.theme;
        return theme.mediaQueries.max.sm;
    }, unsetPosition, function (props) {
        return isVertical(props.layout) ? layoutMap['left'] : layoutMap['bottom'];
    }, function (props) { return props.theme.controlBar.shadow; }, function (props) { return isVertical(props.layout) && '100%'; }, function (props) { return !isVertical(props.layout) && '100%'; }, function (_a) {
        var theme = _a.theme;
        return theme.mediaQueries.max.xs;
    }, function (props) {
        return isVertical(props.layout) ? 'center' : 'space-around';
    }, unsetPosition, function (props) {
        return isVertical(props.layout) ? layoutMap['left'] : layoutMap['bottom'];
    }, function (_a) {
        var theme = _a.theme;
        return theme.controlBar.shadow;
    });
};
export var StyledControlBar = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: ", ";\n  background-color: ", ";\n  opacity: ", ";\n  border: ", ";\n  box-shadow: ", ";\n  ", ";\n\n  ", "\n\n  width: ", ";\n  height: ", ";\n\n  ", "\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: ",
    ";\n  background-color: ", ";\n  opacity: ", ";\n  border: ",
    ";\n  box-shadow: ",
    ";\n  ", ";\n\n  ", "\n\n  width: ", ";\n  height: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, layout = _a.layout;
    return isUndocked(layout) ? theme.radii.default : '0';
}, function (props) { return props.theme.controlBar.bgd; }, function (props) { return props.theme.controlBar.opacity; }, function (_a) {
    var theme = _a.theme, layout = _a.layout;
    return isUndocked(layout) ? 'none' : theme.controlBar.border;
}, function (_a) {
    var theme = _a.theme, layout = _a.layout;
    return isUndocked(layout) ? theme.controlBar.shadow : 'none';
}, function (_a) {
    var layout = _a.layout;
    return layoutMap["" + layout];
}, function (props) { return props.responsive && responsiveStyles(props); }, function (_a) {
    var layout = _a.layout;
    return isVertical(layout) && '5rem';
}, function (_a) {
    var layout = _a.layout;
    return !isVertical(layout) && '5rem';
}, baseSpacing, baseStyles);
export var StyledControlBarItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: ", ";\n  display: grid;\n  grid-template-rows: ", ";\n  justify-items: center;\n  align-items: center;\n  ", ";\n\n  .ch-control-bar-item-iconButton {\n    grid-column-start: ", ";\n\n    .ch-icon {\n      width: 1.5rem;\n      height: 1.5rem;\n      border-radius: 100%;\n    }\n  }\n\n  .ch-control-bar-item-caret {\n      width: 1.25rem;\n      height: 1.25rem;\n      padding: 0;\n\n      .ch-icon {\n        width: 100%;\n        height: 100%;\n      }\n\n      // setting this transform on the shape so we \n      // don't overwrite the rotate transform on the Caret\n      .Svg g {\n        transform: scale(1.333); \n        transform-origin: 50% 50%;\n      }\n    }\n\n  .ch-control-bar-popover {\n    background-color: inherit;\n    grid-column-start: ", ";\n    color: ", ";\n\n    .isOpen.ch-control-bar-item-caret {\n      color: ", ";\n    }\n  }\n\n  .ch-control-bar-item-label {\n    color: ", ";\n    grid-row-start: 2;\n    font-size: ", "; /* TODO: get updated font size from design */\n    padding-top: 0.25rem;\n    justify-self: center;\n    grid-column: ", ";\n  }\n\n  ", " {\n    justify-content: space-around;\n    button ~ span {\n      display: none;\n    }\n  }\n\n  ", " {\n    margin: ", ";\n    button ~ span {\n      display: none;\n    }\n  }\n"], ["\n  margin: ", ";\n  display: grid;\n  grid-template-rows: ",
    ";\n  justify-items: center;\n  align-items: center;\n  ",
    ";\n\n  .ch-control-bar-item-iconButton {\n    grid-column-start: ", ";\n\n    .ch-icon {\n      width: 1.5rem;\n      height: 1.5rem;\n      border-radius: 100%;\n    }\n  }\n\n  .ch-control-bar-item-caret {\n      width: 1.25rem;\n      height: 1.25rem;\n      padding: 0;\n\n      .ch-icon {\n        width: 100%;\n        height: 100%;\n      }\n\n      // setting this transform on the shape so we \n      // don't overwrite the rotate transform on the Caret\n      .Svg g {\n        transform: scale(1.333); \n        transform-origin: 50% 50%;\n      }\n    }\n\n  .ch-control-bar-popover {\n    background-color: inherit;\n    grid-column-start: ", ";\n    color: ", ";\n\n    .isOpen.ch-control-bar-item-caret {\n      color: ", ";\n    }\n  }\n\n  .ch-control-bar-item-label {\n    color: ", ";\n    grid-row-start: 2;\n    font-size: ",
    "; /* TODO: get updated font size from design */\n    padding-top: 0.25rem;\n    justify-self: center;\n    grid-column: ",
    ";\n  }\n\n  ", " {\n    justify-content: space-around;\n    button ~ span {\n      display: none;\n    }\n  }\n\n  ", " {\n    margin: ", ";\n    button ~ span {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var layout = _a.layout;
    return (isVertical(layout) ? '0.625rem 0' : '0 0.625rem');
}, function (_a) {
    var showLabels = _a.showLabels;
    return showLabels ? '1.5rem 1rem' : '1.5rem';
}, function (_a) {
    var popOver = _a.popOver, layout = _a.layout, children = _a.children;
    return "\n    " + ((!isVertical(layout) && (popOver || children) && gridTemplateColumnMap['popOver']) ||
        '') + "\n    " + ((isVertical(layout) &&
        (popOver || children) &&
        gridTemplateColumnMap['popOver&vertical']) ||
        '') + "\n  ";
}, function (_a) {
    var layout = _a.layout, popOver = _a.popOver, children = _a.children;
    return isVertical(layout) && (popOver || children) ? '2' : '1';
}, function (_a) {
    var layout = _a.layout, popOver = _a.popOver, children = _a.children;
    return isVertical(layout) && (popOver || children) ? '2' : '1';
}, function (_a) {
    var theme = _a.theme;
    return theme.controlBar.text;
}, function (props) { return props.theme.colors.primary.main; }, function (_a) {
    var theme = _a.theme;
    return theme.controlBar.text;
}, function (props) {
    return props.theme.fontSizes.footnote
        .fontSize;
}, function (_a) {
    var layout = _a.layout, popOver = _a.popOver, children = _a.children;
    return isVertical(layout) && (popOver || children) ? '2' : '1';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.max.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.max.xs;
}, function (_a) {
    var layout = _a.layout;
    return (isVertical(layout) ? '0.75rem 0' : '0');
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Styled.js.map