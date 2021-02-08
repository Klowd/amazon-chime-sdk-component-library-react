// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { createContext, useContext } from 'react';
export var ModalContext = createContext({
    onClose: function () { },
    labelID: '',
});
export var useModalContext = function () {
    return useContext(ModalContext);
};
export default ModalContext;
//# sourceMappingURL=ModalContext.js.map