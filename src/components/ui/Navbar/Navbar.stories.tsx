// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Attendees, Information, LeaveMeeting } from '../icons';

import Flex from '../Flex';
import Navbar from '.';
import NavbarDocs from "./Navbar.mdx";
import NavbarHeader from './NavbarHeader';
import NavbarItem from './NavbarItem';
import React from 'react';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'UI Components/Navbar',
  parameters: {
    docs: {
      page: NavbarDocs.parameters.docs.page().props.children.type
    }
  },
  component: Navbar
};

export const _Navbar = () => {

  const handleOnClose = () => {
    console.log('On close');
  }

  return (
    <Navbar flexDirection="column" container>
      <NavbarHeader onClose={handleOnClose}/>
      <Flex>
        <NavbarItem
          icon={<Information />}
          onClick={() => alert('Information')}
          label="Bridge Information"
          isSelected={boolean('isSelected', false)}
        />
        <NavbarItem
          icon={<Attendees />}
          onClick={() => alert('Attendees')}
          label="Attendees"
          isSelected={boolean('isSelected', false)}
        />
      </Flex>
      <Flex marginTop='auto'>
        <NavbarItem
          icon={<LeaveMeeting />}
          onClick={() => alert('Leave Meeting')}
          label="Leave Meeting"
          isSelected={boolean('isSelected', false)}
        />
      </Flex>
    </Navbar>
  );
};
