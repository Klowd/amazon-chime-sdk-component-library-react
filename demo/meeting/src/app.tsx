// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AppStateProvider, useAppState } from './providers/AppStateProvider';
import { DeviceSetup, Home, Meeting } from './views';
import {
  GlobalStyles,
  MeetingProvider,
  NotificationProvider,
  darkTheme,
  lightTheme
} from 'amazon-chime-sdk-component-library-react';
import React, { FC } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ErrorProvider from './providers/ErrorProvider';
import { NavigationProvider } from './providers/NavigationProvider';
import NoMeetingRedirect from './containers/NoMeetingRedirect';
import Notifications from './containers/Notifications';
import { ThemeProvider } from 'styled-components';
// import NoMeetingRedirect from './containers/NoMeetingRedirect';
import meetingConfig from './meetingConfig';
import routes from './constants/routes';

const App: FC = () => (
  <Router>
    <AppStateProvider>
      <Theme>
        <NotificationProvider>
          <Notifications />
          <ErrorProvider>
            <MeetingProvider {...meetingConfig}>
              <NavigationProvider>
                <Switch>
                  <Route exact path={routes.HOME} component={Home} />
                  <Route path={routes.DEVICE}>
                    {/* <NoMeetingRedirect> */}
                      <DeviceSetup />
                    {/* </NoMeetingRedirect> */}
                  </Route>
                  <Route path={routes.MEETING}>
                    {/* <NoMeetingRedirect> */}
                      <Meeting />
                    {/* </NoMeetingRedirect> */}
                  </Route>
                </Switch>
              </NavigationProvider>
            </MeetingProvider>
          </ErrorProvider>
        </NotificationProvider>
      </Theme>
    </AppStateProvider>
  </Router>
);

const Theme: React.FC = ({ children }) => {
  const { theme } = useAppState();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default App;
