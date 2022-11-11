import React from 'react';
import {Navigation} from 'react-native-navigation';
import ProviderWrapper from '../components/ProviderWrapper';
import Login from '../pages/Login';
import Main from '../pages/Main';
import {store} from '../store';

const initializeNavigation = (): void => {
  Navigation.registerComponent('com.way.Login', () => props => (
    <ProviderWrapper>
      <Login />
    </ProviderWrapper>
  ));

  Navigation.registerComponent('com.way.Main', () => props => (
    <ProviderWrapper store={store}>
      <Main {...props} />
    </ProviderWrapper>
  ));
};

export default initializeNavigation;
