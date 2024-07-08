import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "@screens/welcome";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

const Stack = createNativeStackNavigator<PublicRoutesParams>();

export default function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PUBLIC_ROUTES.WELCOME} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
