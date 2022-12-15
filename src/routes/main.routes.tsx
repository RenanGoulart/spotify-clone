import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { MainStackProps } from 'src/@types/router';

export type MainNavProps = NativeStackNavigationProp<MainStackProps>;

const { Navigator, Screen } = createNativeStackNavigator<MainStackProps>();

const MainRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default MainRoutes;
