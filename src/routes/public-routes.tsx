import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "@screens/welcome";
import { SignInScreen } from "@screens/sign-in";
import SignUpScreen from "@screens/sign-up";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

const Stack = createNativeStackNavigator<PublicRoutesParams>();

export default function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PUBLIC_ROUTES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={PUBLIC_ROUTES.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={PUBLIC_ROUTES.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
