import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackProps } from "src/@types/router";
import Initial from "@screens/Auth/Initial";

export type AuthNavProps = NativeStackNavigationProp<AuthStackProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackProps>();

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Initial" component={Initial} />
      {/* <Screen name="SignUp" component={SignUp} /> */}
    </Navigator>
  );
};

export default AuthRoutes;
