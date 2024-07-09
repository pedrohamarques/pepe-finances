import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/home";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

const BottomTab = createBottomTabNavigator<PrivateRoutesParams>();

export default function PrivateRoutes() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={PRIVATE_ROUTES.HOME} component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
