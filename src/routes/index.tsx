import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainRoutes from './main.routes';

import { RootStackProps } from 'src/@types/router';

const { Navigator, Screen } = createNativeStackNavigator<RootStackProps>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Main" component={MainRoutes} />
      </Navigator>
    </NavigationContainer>
  );
};
