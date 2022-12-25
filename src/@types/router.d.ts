import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type RootStackProps = {
  Main: NavigatorScreenParams<MainStackProps>;
  Auth: NavigatorScreenParams<MainStackProps>;
}

export type RootStackProps<T extends keyof RootStackProps> =
  NativeStackScreenProps<RootStackProps, T>;

export type MainStackProps = {
  Home: undefined;
}

export type MainStackProps<T extends keyof MainStackProps> =
  NativeStackScreenProps<MainStackProps, T>;


export type AuthStackProps = {
  Initial: undefined;
  Register: undefined;
  Login: undefined;
}

export type AuthStackScreenProps<T extends keyof AuthStackProps> =
  NativeStackScreenProps<AuthStackProps, T>;
