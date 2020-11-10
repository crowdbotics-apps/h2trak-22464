import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial170304Navigator from '../features/Tutorial170304/navigator';
import NotificationList170276Navigator from '../features/NotificationList170276/navigator';
import Settings170275Navigator from '../features/Settings170275/navigator';
import Settings170267Navigator from '../features/Settings170267/navigator';
import UserProfile170265Navigator from '../features/UserProfile170265/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial170304: { screen: Tutorial170304Navigator },
NotificationList170276: { screen: NotificationList170276Navigator },
Settings170275: { screen: Settings170275Navigator },
Settings170267: { screen: Settings170267Navigator },
UserProfile170265: { screen: UserProfile170265Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
