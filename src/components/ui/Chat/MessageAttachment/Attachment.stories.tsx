// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Flex from '../../Flex';
import MessageAttachment from '.';
import MessageAttachmentDocs from './Attachment.mdx';
import React from 'react';

export default {
  title: 'UI Components/Chat/MessageAttachment',
  parameters: {
    docs: {
      page: MessageAttachmentDocs.parameters.docs.page().props.children.type,
    },
  },
  component: MessageAttachment,
};

export const _MessageAttachment = () => {
  return (
    <Flex layout="fill-space-centered">
      <MessageAttachment
        name="Monthly_report.txt"
        size="30.3KB"
        downloadUrl="https://download.com/url.txt"
      />
    </Flex>
  );
};

_MessageAttachment.story = {
  name: 'MessageAttachment',
};
