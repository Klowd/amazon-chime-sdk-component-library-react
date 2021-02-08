// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var sortedRatios = [
    'r1by2',
    'r2by3',
    'r1by1',
    'r4by3',
    'r3by2',
    'r16by9'
];
var ratioStyles = {
    '1': 'grid-template: 1fr / 1fr;',
    '1.slim': 'grid-template: repeat(2, 1fr) / 1fr;',
    '1.r2by3': 'grid-template: 1fr / 1fr;',
    '1.featured': "grid-template: \"ft\" 1fr / 1fr;",
    '2': 'grid-template: 1fr / repeat(2,1fr);',
    '2.r16by9': "grid-template: repeat(3,1fr) / repeat(2,1fr);\n    grid-template-areas: '. .' 'a b' '. .';",
    '2.featured': "grid-template: 1fr / repeat(2,1fr);\n   grid-template-areas: 'ft v';",
    '2.r16by9.featured': "grid-template: repeat(3,1fr) / repeat(2,1fr);\n    grid-template-areas: '. .' 'v v' '. .';",
    '3': "grid-template: repeat(2,1fr) / repeat(4,1fr);\n   grid-template-areas: 'v v v v' '. v v .';",
    '3.featured': "grid-template: repeat(2,1fr) / repeat(4,1fr);\n  grid-template-areas: '. v v .' 'v v v v';",
    '3.r16by9.featured': "grid-template: repeat(2,1fr) / repeat(4,1fr);\n  grid-template-areas: '. v v .' 'v v v v';",
    '4': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '4.featured': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '4.r16by9.featured': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
    '5': "grid-template: repeat(2,1fr) / repeat(6,1fr);\n    grid-template-areas: 'v v v v v v' '. v v v v .';\n    grid-area: span 1 / span 2;",
    '5.r16by9': "grid-template: repeat(2,1fr) / repeat(6,1fr);\n    grid-template-areas: 'v v v v v v' 'v v v v . .';\n    grid-area: span 1 / span 2;",
    '5.featured': "grid-template: repeat(4,1fr) / repeat(2,1fr);\n    grid-template-areas: 'ft ft' 'ft ft' 'v v' 'v v';",
    '6': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
    '6.r16by9': "grid-template: repeat(2,1fr) / repeat(3,1fr);",
    '6.featured': "grid-template: repeat(2,1fr) / repeat(3,1fr);\n    grid-template-areas: 'ft ft ft' 'ft ft ft';",
    '6.r1by1.featured': "grid-template: repeat(3,1fr) / repeat(3,1fr);\n    grid-template-areas: 'ft ft v' 'ft ft v';",
    '7': "grid-template: repeat(3,1fr) / repeat(3,1fr);\n        grid-template-areas: 'v v v' 'v v v' '. v .';",
    '7.r16by9': "grid-template: repeat(2,1fr) / repeat(8,1fr);\n        grid-template-areas: 'v v v' 'v v v' '. v .';",
    '7.featured': "grid-template: repeat(4,1fr) / repeat(3,1fr);\n    grid-template-areas: 'ft ft ft' 'ft ft ft';",
    '7.r1by1.featured': "grid-template: repeat(4,1fr) / repeat(4,1fr);\n    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft v';",
    '8': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '8.r16by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
    '8.featured': "grid-template: repeat(5,1fr) / repeat(4,1fr);\n    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';",
    '8.r1by1.featured': "grid-template: repeat(4,1fr) / repeat(4,1fr);\n    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';",
    '8.r16by9.featured': "grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';",
    '9': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '9.slim': "grid-template: repeat(5,1fr) / repeat(2,1fr);",
    '9.r1by1': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
    '9.r16by9': "grid-template: repeat(3,1fr) / repeat(4,1fr);",
    '9.featured': "grid-template: repeat(5,1fr) / repeat(4,1fr);\n    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';",
    '9.r1by1.featured': "grid-template: repeat(5,1fr) / repeat(5,1fr);\n    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';",
    '10': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '10.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '10.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
    '10.featured': "grid-template: repeat(5,1fr) / repeat(4,1fr);\n    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';",
    '10.r1by1.featured': "grid-template: repeat(5,1fr) / repeat(5,1fr);\n    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';",
    '11': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '11.slim': 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
    '11.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '11.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
    '11.r16by9': "grid-template: repeat(3,1fr) / repeat(4,1fr);",
    '11.featured': "grid-template: repeat(6,1fr) / repeat(6,1fr);\n    grid-template-areas: 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft';",
    '11.r1by1.featured': "grid-template-areas:\n      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'\n      'ft ft ft ft ft v' 'ft ft ft ft ft x';",
    '12': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '12.slim': 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
    '12.r2by3': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
    '12.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
    '12.featured': "grid-template: repeat(6,1fr) / repeat(6,1fr);\n    grid-template-areas:\n      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'\n      'ft ft ft ft ft ft';",
    '12.r1by1.featured': "grid-template-areas:\n    'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'\n    'ft ft ft ft ft v' 'ft ft ft ft ft x';",
    '13': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '13.slim': 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
    '13.r2by3': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '13.r1by1': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '13.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '13.r16by9': "grid-template: repeat(3,1fr) / repeat(5,1fr);",
    '13.featured': "grid-template: repeat(7,1fr) / repeat(6,1fr);\n    grid-template-areas:\n      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'\n      'ft ft ft ft ft ft';",
    '13.r1by1.featured': "grid-template-areas:\n      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'\n      'ft ft ft ft ft v' 'ft ft ft ft ft x';",
    '14': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '14.slim': 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
    '14.r2by3': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '14.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '14.r16by9': "grid-template: repeat(3,1fr) / repeat(5,1fr);",
    '14.featured': "grid-template: repeat(7,1fr) / repeat(7,1fr);\n    grid-template-areas:\n      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft'\n      'ft ft ft ft ft ft ft';",
    '14.r1by1.featured': "grid-template-areas:\n      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'\n      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';",
    '15': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '15.slim': 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
    '15.r1by2': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
    '15.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '15.r16by9': "grid-template: repeat(3,1fr) / repeat(5,1fr);",
    '15.featured': "grid-template: repeat(8,1fr) / repeat(8,1fr);\n    grid-template-areas:\n     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'\n     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';",
    '15.r1by1.featured': "grid-template-areas:\n     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'\n     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';",
    '16': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '16.slim': 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
    '16.r1by2': 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
    '16.r1by1': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
    '16.featured': "grid-template: repeat(8,1fr) / repeat(8,1fr);\n    grid-template-areas:\n      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'\n      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';",
    '16.r1by1.featured': "grid-template-areas:\n      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'\n      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';",
    '17': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
    '17.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
    '17.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
    '17.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
    '17.featured': "grid-template: repeat(8,1fr) / repeat(9,1fr);\n    grid-template-areas:\n      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'\n      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';",
    '17.r1by1.featured': "grid-template-areas:\n      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'\n      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';"
};
var responsiveStyles = {
    '2.featured': "\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n      grid-template-rows: calc(100% / 3);\n      grid-auto-rows: calc(100% / 3);\n    }\n  ",
    '3.r16by9': "\n    @media (max-height: 600px) {\n      grid-template-rows: repeat(2,1fr);\n      grid-template-columns: 50%;\n      grid-auto-columns: 50%;\n      grid-auto-flow: column;\n    }\n  ",
    '3.featured': "\n    @media (max-width: 600px) {\n      grid-template-areas: 'ft' 'ft';\n      grid-template-columns: 1fr;\n      grid-template-rows: 25%;\n      grid-auto-rows: 25%;\n    }\n  ",
    '4.r16by9': "\n    @media (max-height: 600px) {\n      grid-template-rows: repeat(2,1fr);\n      grid-template-columns: 50%;\n      grid-auto-columns: 50%;\n      grid-auto-flow: column;\n    }\n  ",
    '5.r16by9': "grid-template: repeat(2,1fr) / repeat(3,1fr);\n    @media (max-height: 600px) {\n      grid-template-rows: repeat(2,1fr);\n      grid-template-columns: calc(100% / 3);\n      grid-auto-columns: calc(100% / 3);\n      grid-auto-flow: column;\n    }\n  ",
    '6.r16by9': "grid-template: repeat(2,1fr) / repeat(3,1fr);\n    @media (max-height: 600px) {\n      grid-template-rows: repeat(2,1fr);\n      grid-template-columns: calc(100% / 3);\n      grid-auto-columns: calc(100% / 3);\n      grid-auto-flow: column;\n    }\n  ",
    '7.r16by9': "\n    @media (max-height: 600px) {\n      grid-template-rows: repeat(2,1fr);\n      grid-template-columns: 25%;\n      grid-auto-columns: 25%;\n      grid-auto-flow: column;\n    }\n  "
};
var portraitStyles = "\n  @media (max-width: 600px) {\n    grid-template-areas: 'ft ft' 'ft ft';\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: 25%;\n    grid-auto-rows: 25%;\n  }\n";
var landscapeStyles = "\n  @media (max-height: 600px) {\n    grid-template-areas: 'ft ft' 'ft ft';\n    grid-template-rows: repeat(2,1fr);\n    grid-template-columns: 25%;\n    grid-auto-columns: 25%;\n    grid-auto-flow: column;\n  }\n";
export var StyledGrid = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: grid;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: ", ";\n\n  ", "\n  ", ";\n"], ["\n  position: relative;\n  display: grid;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: ", ";\n\n  ",
    "\n  ",
    ";\n"])), function (props) { return props.theme.videoGrid.bgd; }, function (_a) {
    var size = _a.size, featured = _a.featured;
    return ratioStyles["" + size + (featured ? '.featured' : '')] || '';
}, function (_a) {
    var size = _a.size, featured = _a.featured, ratio = _a.ratio;
    if (!ratio) {
        return;
    }
    var styles = '';
    var index = sortedRatios.indexOf(ratio);
    for (var i = 0; i <= index; i++) {
        var currentRatio = sortedRatios[i];
        var baseStyles = ratioStyles[size + "." + currentRatio + (featured ? '.featured' : '')];
        styles += baseStyles || '';
    }
    var mobileStyles = responsiveStyles[size + "." + ratio + (featured ? '.featured' : '')] ||
        responsiveStyles["" + size + (featured ? '.featured' : '')];
    if (mobileStyles) {
        styles += mobileStyles;
    }
    else if (ratio === 'r16by9' && (size > 7 || featured)) {
        styles += landscapeStyles;
    }
    else if (size > 7 || featured) {
        styles += portraitStyles;
    }
    return styles;
});
var templateObject_1;
//# sourceMappingURL=Styled.js.map