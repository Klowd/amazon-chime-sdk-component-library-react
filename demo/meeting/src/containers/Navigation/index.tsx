// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Attendees,
  Chat,
  Information,
  Navbar,
  NavbarHeader,
  NavbarItem
} from 'amazon-chime-sdk-component-library-react';
import React, { useEffect } from 'react';

import { useNavigation } from '../../providers/NavigationProvider';

//import { useAppState } from '../../providers/AppStateProvider';

const Navigation = () => {
  const { toggleRoster, toggleMetrics, closeNavbar, toggleChat } = useNavigation();
  //const { theme } = useAppState();

  return (
    <Navbar className="nav" flexDirection="column" container>
      <NavbarHeader title="Navigation" onClose={closeNavbar} />
      <NavbarItem
        icon={<Chat />}
        onClick={toggleChat}
        label={'Chat'}
      />
      <NavbarItem
        icon={<Attendees />}
        onClick={toggleRoster}
        label="Attendees"
      />
      <NavbarItem
        icon={<Information />}
        onClick={toggleMetrics}
        label="Meeting metrics"
      />
    </Navbar>
  );
};

export default Navigation;
