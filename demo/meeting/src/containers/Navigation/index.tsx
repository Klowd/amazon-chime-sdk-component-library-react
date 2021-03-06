// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Attendees,
  Eye,
  Information,
  Navbar,
  NavbarHeader,
  NavbarItem
} from 'amazon-chime-sdk-component-library-react';

import React from 'react';
import { useAppState } from '../../providers/AppStateProvider';
import { useNavigation } from '../../providers/NavigationProvider';

const Navigation = () => {
  const { toggleRoster, toggleMetrics, closeNavbar } = useNavigation();
  const { theme, toggleTheme } = useAppState();

  return (
    <Navbar className="nav" flexDirection="column" container>
      <NavbarHeader title="Navigation" onClose={closeNavbar} />
      <NavbarItem
        icon={<Attendees />}
        onClick={toggleRoster}
        label="Attendees"
      />
      <NavbarItem
        icon={<Eye />}
        onClick={toggleTheme}
        label={theme === 'light' ? 'Dark mode' : 'Light mode'}
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
