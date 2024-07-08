import React from "react";
import { Text } from "react-native";

import { ScreenContainer } from "@components/screen-container";

export function SignInScreen() {
  return (
    <ScreenContainer testID="screens.sign-in.screen-container">
      <Text className="font-inter-bold text-white tracking-widest text-3xl">
        Sign In
      </Text>
    </ScreenContainer>
  );
}
