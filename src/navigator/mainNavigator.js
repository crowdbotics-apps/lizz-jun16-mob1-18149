import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings68278Navigator from '../features/Settings68278/navigator';
import UserProfile68271Navigator from '../features/UserProfile68271/navigator';
import Settings68270Navigator from '../features/Settings68270/navigator';
import Settings68268Navigator from '../features/Settings68268/navigator';
import SignIn268266Navigator from '../features/SignIn268266/navigator';
import BlankScreen767288Navigator from '../features/BlankScreen767288/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings68278: { screen: Settings68278Navigator },
UserProfile68271: { screen: UserProfile68271Navigator },
Settings68270: { screen: Settings68270Navigator },
Settings68268: { screen: Settings68268Navigator },
SignIn268266: { screen: SignIn268266Navigator },
BlankScreen767288: { screen: BlankScreen767288Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
