// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Add from '../Add';
import Arrow from '../Arrow';
import Attachment from '../Attachment';
import Attendees from '../Attendees';
import Camera from '../Camera';
import Caret from '../Caret';
import Caution from '../Caution';
import Chat from '../Chat';
import Check from '../Check';
import CheckRound from '../CheckRound';
import Clear from '../Clear';
import Clock from '../Clock';
import Cog from '../Cog';
import ConnectionProblem from '../ConnectionProblem';
import Crown from '../Crown';
import DeskPhone from '../DeskPhone';
import Dialer from '../Dialer';
import Dislike from '../Dislike';
import Dock from '../Dock';
import Document from '../Document';
import Dots from '../Dots';
import DropToAttach from '../DropToAttach';
import Echo from '../Echo';
import EmojiPicker from '../EmojiPicker';
import Eye from '../Eye';
import Flex from '../../Flex';
import Hamburger from '../Hamburger';
import HandRaise from '../HandRaise';
import Information from '../Information';
import Laptop from '../Laptop';
import LeaveMeeting from '../LeaveMeeting';
import Like from '../Like';
import ListHandRaise from '../ListHandRasie';
import Lock from '../Lock';
import Meeting from '../Meeting';
import Microphone from '../Microphone';
import Pause from '../Pause';
import Phone from '../Phone';
import Pin from '../Pin';
import Play from '../Play';
import Presenter from '../Presenter';
import React from 'react';
import Record from '../Record';
import Remove from '../Remove';
import Rooms from '../Rooms';
import ScreenShare from '../ScreenShare';
import Search from '../Search';
import Share from '../Share';
import SignalStrength from '../SignalStrength';
import Sound from '../Sound';
import Spinner from '../Spinner';
import UpAndDownCaret from '../UpAndDownCaret';
import ZoomIn from '../ZoomIn';
import ZoomOut from '../ZoomOut';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Icons/All',
  component: null,
};

const icons = [
  Add,
  Arrow,
  Attendees,
  Attachment,
  Camera,
  Caret,
  Caution,
  Chat,
  Check,
  CheckRound,
  Clear,
  Clock,
  Cog,
  ConnectionProblem,
  Crown,
  Dislike,
  DropToAttach,
  Dots,
  Dock,
  Document,
  ScreenShare,
  Crown,
  DeskPhone,
  Echo,
  Dialer,
  EmojiPicker,
  Eye,
  Hamburger,
  HandRaise,
  Information,
  Laptop,
  LeaveMeeting,
  Like,
  ListHandRaise,
  Lock,
  Meeting,
  Microphone,
  Pause,
  Pin,
  Phone,
  Play,
  Presenter,
  Record,
  Remove,
  Rooms,
  Search,
  Share,
  SignalStrength,
  Sound,
  Spinner,
  UpAndDownCaret,
  ZoomOut,
  ZoomIn,
];

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1.5rem;
  width: 80px;
  padding: 0.5rem;
  border-radius: 2px;
`;

const getIconAndName = (Component) => {
  return (
    <IconWrapper>
      <Component width={text('width', '4rem')} />
      <p>{Component.displayName}</p>
    </IconWrapper>
  );
};

export const _All = () => {
  return (
    <Flex container flexDirection="row" alignItems="center" flexWrap="wrap">
      {icons.map((i) => getIconAndName(i))}
    </Flex>
  );
};
