/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import ProviderWrapper from './components/ProviderWrapper';
import Login from './pages/Login';

Navigation.registerComponent('com.way.Login', () => props => (
  <ProviderWrapper>
    <Login />
  </ProviderWrapper>
));
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.way.Login',
            },
          },
        ],
      },
    },
  });
});
