// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Flex,
  SecondaryButton
} from 'amazon-chime-sdk-component-library-react';
import { StyledDiv, StyledWrapper } from './Styled';

import MeetingForm from '../MeetingForm';
import React from 'react';
import SIPMeeting from '../SIPMeeting';
import SIPMeetingProvider from '../../providers/SIPMeetingProvider';
import useToggle from '../../hooks/useToggle';

const MeetingFormSelector: React.FC = () => {
  const { isActive, toggle } = useToggle(false);
  const formToShow = isActive ? (
    <SIPMeetingProvider>
      <SIPMeeting />
    </SIPMeetingProvider>
  ) : (
    <MeetingForm />
  );
  const buttonText = isActive ? 'Join without SIP' : 'Join via SIP';

  return (
    <StyledWrapper>
      <StyledDiv>{formToShow}</StyledDiv>
      <Flex container layout="fill-space-centered" style={{ padding: '2rem' }}>
        <SecondaryButton label={buttonText} onClick={toggle} />
      </Flex>
    </StyledWrapper>
  );
};

export default MeetingFormSelector;
