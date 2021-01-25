// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ControlBarButton,
  Modal,
  ModalBody,
  ModalButton,
  ModalButtonGroup,
  ModalHeader,
  Phone,
  useMeetingManager
} from 'amazon-chime-sdk-component-library-react';
import React, { useState } from 'react';

import { StyledP } from './Styled';
import { endMeeting } from '../../utils/api';
import routes from '../../constants/routes';
import { useAppState } from '../../providers/AppStateProvider';
import { useHistory } from 'react-router-dom';

const EndMeetingControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (): void => setShowModal(!showModal);
  const { meetingId } = useAppState();
  const history = useHistory();

  const leaveMeeting = async (): Promise<void> => {
    history.push(routes.HOME);
  };

  const endMeetingForAll = async (): Promise<void> => {
    try {
      if (meetingId) {
        await endMeeting(meetingId);
        await meetingManager.leave();
        history.push(routes.HOME);
      }
    } catch (e) {
      console.log('Could not end meeting', e);
    }
  };

  return (
    <>
      <ControlBarButton icon={<Phone />} onClick={toggleModal} label="Leave" />
      {showModal && (
        <Modal size="md" onClose={toggleModal} rootId="modal-root">
          <ModalHeader title="End Meeting" />
          <ModalBody>
            <StyledP>
              Leave meeting or you can end the meeting for all. The meeting
              cannot be used once it ends.
            </StyledP>
          </ModalBody>
          <ModalButtonGroup
            primaryButtons={[
              <ModalButton
                onClick={endMeetingForAll}
                variant="primary"
                label="End meeting for all"
                closesModal
              />,
              <ModalButton
                onClick={leaveMeeting}
                variant="primary"
                label="Leave Meeting"
                closesModal
              />,
              <ModalButton variant="secondary" label="Cancel" closesModal />
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default EndMeetingControl;
