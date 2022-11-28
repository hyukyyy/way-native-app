import React from 'react';
import {Navigation} from 'react-native-navigation';
import ProviderWrapper from '../components/ProviderWrapper';
import FriendList from '../pages/FriendList';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import {store} from '../store';

const initializeNavigation = (): void => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
  });
  Navigation.registerComponent('com.way.Login', () => props => (
    <ProviderWrapper>
      <Login />
    </ProviderWrapper>
  ));

  Navigation.registerComponent('com.way.Main', () => props => (
    <ProviderWrapper>
      <Main {...props} />
    </ProviderWrapper>
  ));

  Navigation.registerComponent('com.way.FriendList', () => props => (
    <ProviderWrapper>
      <FriendList {...props} />
    </ProviderWrapper>
  ));

  Navigation.registerComponent('com.way.MyPage', () => props => (
    <ProviderWrapper>
      <MyPage {...props} />
    </ProviderWrapper>
  ));
};

export default initializeNavigation;
