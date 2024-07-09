import React from "react";
import { View } from "react-native";

import { ScreenContainer } from "@components/screen-container";
import { CustomButton } from "@components/button-custom";
import { Logo } from "@components/logo";

import { useWelcomeScreen } from "./welcome.hook";

export function WelcomeScreen() {
  const { handleSignInPress, handleSignUpPress } = useWelcomeScreen();

  return (
    <ScreenContainer testID="screens.welcome.screen-container" bounces={false}>
      <View className="flex-1 justify-end items-center ">
        <Logo testID="screens.welcome.logo" />
      </View>

      <View className="flex-1 justify-end mb-10 space-y-6 w-full px-8">
        <CustomButton
          text="Sign In"
          onPress={handleSignInPress}
          testID="screens.welcome.custom-button.sign-in"
        />
        <CustomButton
          text="Sign Up"
          onPress={handleSignUpPress}
          testID="screens.welcome.custom-button.sign-up"
        />
      </View>
    </ScreenContainer>
  );
}
