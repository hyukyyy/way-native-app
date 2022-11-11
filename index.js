/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import initializeNavigation from './navigation';

initializeNavigation();
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
