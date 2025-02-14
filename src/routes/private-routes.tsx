import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "@screens/home";
import AddExpense from "@screens/addExpense";

import { PRIVATE_ROUTES, PrivateRoutesParams } from "@typings/routes";

const BottomTab = createBottomTabNavigator<PrivateRoutesParams>();

export default function PrivateRoutes() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name={PRIVATE_ROUTES.HOME}
        component={HomeScreen}
        options={{ tabBarIcon: () => <Feather name="home" size={24} /> }}
      />
      <BottomTab.Screen
        name={PRIVATE_ROUTES.ADD_EXPENSE}
        component={AddExpense}
        options={{ tabBarIcon: () => <Feather name="plus" size={24} /> }}
      />
    </BottomTab.Navigator>
  );
}
