// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
export var Portal = function (_a) {
    var children = _a.children, rootId = _a.rootId;
    var el;
    var newRoot;
    var _b = useState(), mount = _b[0], setMount = _b[1];
    useEffect(function () {
        if (!!rootId) {
            el = document.getElementById(rootId);
        }
        if (!!el) {
            setMount(el);
        }
        else {
            newRoot = document.createElement('div');
            document.body.appendChild(newRoot);
            setMount(newRoot);
        }
        return function () {
            !!newRoot && newRoot.remove();
        };
    }, [rootId]);
    return mount ? createPortal(children, mount) : null;
};
export default Portal;
//# sourceMappingURL=index.js.map