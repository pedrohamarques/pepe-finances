import React from "react";

import { ScreenContainer } from "@components/screen-container";
import { Text } from "react-native";

export function HomeScreen() {
  return (
    <ScreenContainer testID="screens.home.screen-container">
      <Text>Home Screen</Text>
    </ScreenContainer>
  );
}
