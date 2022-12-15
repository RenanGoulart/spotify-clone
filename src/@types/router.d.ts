import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type RootStackProps = {
  Main: NavigatorScreenParams<MainStackProps>;
}

export type RootStackProps<T extends keyof RootStackProps> =
  NativeStackScreenProps<RootStackProps, T>;

export type MainStackProps = {
  Home: undefined;
}
