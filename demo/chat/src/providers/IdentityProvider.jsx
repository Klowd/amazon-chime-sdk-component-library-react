/* eslint-disable import/no-extraneous-dependencies */
// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useContext, useEffect, useState } from 'react';

import { IdentityService } from '../services/IdentifyService';
import appConfig from '../Config';
import { useAuthContext } from './AuthProvider';

const IdentifyServiceContext = createContext(null);

export const IdentifyProvider = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const [identifyService] = useState(
    () => new IdentityService(appConfig.region, appConfig.cognitoUserPoolId)
  );

  useEffect(() => {
    if (!identifyService || !isAuthenticated) return;
    identifyService.setupClient();
  }, [identifyService, isAuthenticated]);

  return (
    <IdentifyServiceContext.Provider value={identifyService}>
      {children}
    </IdentifyServiceContext.Provider>
  );
};

export function useIdentifyService() {
  const context = useContext(IdentifyServiceContext);

  if (context === undefined) {
    throw new Error(
      'useIdentifyService must be used within a IdentifyServiceContext'
    );
  }

  return context;
}

export default IdentifyProvider;
