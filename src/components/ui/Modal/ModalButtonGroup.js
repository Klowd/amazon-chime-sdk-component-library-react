// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { StyledModalButtonGroup } from './Styled';
import { useModalContext } from './ModalContext';
export var ModalButtonGroup = function (_a) {
    var primaryButtons = _a.primaryButtons, secondaryButtons = _a.secondaryButtons;
    var context = useModalContext();
    var addCloseBehaviorToButton = function (button) {
        return React.cloneElement(button, {
            onClick: function () {
                button.props.onClick && button.props.onClick();
                !!button.props.closesModal && context.onClose();
            },
            key: button.props.label
        });
    };
    var addCloseBehaviorToButtons = function (buttons) {
        if (!buttons || (buttons instanceof Array && buttons.length === 0)) {
            return buttons;
        }
        if (!(buttons instanceof Array)) {
            return addCloseBehaviorToButton(buttons);
        }
        return buttons.map(addCloseBehaviorToButton);
    };
    return (React.createElement(StyledModalButtonGroup, { "data-testid": "modal-button-group" },
        React.createElement("div", null, addCloseBehaviorToButtons(primaryButtons)),
        secondaryButtons && (React.createElement("div", null, addCloseBehaviorToButtons(secondaryButtons)))));
};
export default ModalButtonGroup;
//# sourceMappingURL=ModalButtonGroup.js.map