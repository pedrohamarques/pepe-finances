import React from "react";
import { Image, Text, View } from "react-native";

import { ScreenContainer } from "@components/screen-container";
import { CustomButton } from "@components/button-custom";

export function WelcomeScreen() {
  return (
    <ScreenContainer testID="screens.welcome.screen-container">
      <View className="justify-center items-center gap-4">
        <Image
          source={require("@assets/pepe-money.png")}
          className="w-[200px] h-[200px]"
        />
        <Text className="font-inter-bold text-white tracking-widest text-3xl">
          Pepe Finances
        </Text>
      </View>

      <View className="justify-center mt-10 space-y-10 w-full px-8">
        <CustomButton
          text="Sign In"
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
