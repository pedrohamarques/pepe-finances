import React from "react";
import { Text, View } from "react-native";

import { ScreenContainer } from "@components/screen-container";
import { CustomButton } from "@components/button-custom";
import { Logo } from "@components/logo";

import { useWelcomeScreen } from "./welcome.hook";

export function WelcomeScreen() {
  const { handleSignInPress } = useWelcomeScreen();

  return (
    <ScreenContainer testID="screens.welcome.screen-container" bounces={false}>
      <Logo testID="screens.welcome.logo" />

      <View className="justify-center mt-10 space-y-10 w-full px-8">
        <CustomButton
          text="Sign In"
          onPress={handleSignInPress}
          testID="screens.welcome.custom-button.sign-in"
        />
        <CustomButton
          text="Sign Up"
          testID="screens.welcome.custom-button.sign-up"
        />

        <View>
          <Text>Google</Text>
        </View>
      </View>
    </ScreenContainer>
  );
}
