// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { v4 } from 'uuid';
// ensure that this never changes on re-render by
// omitting a function to update state
export function useUniqueId() {
    var uniqueId = useState(function () { return v4(); })[0];
    return uniqueId;
}
export default useUniqueId;
//# sourceMappingURL=index.js.map