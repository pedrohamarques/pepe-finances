import React from "react";
import { Image, Text, View } from "react-native";

import { ScreenContainer } from "@components/screen-container";

export function WelcomeScreen() {
  return (
    <ScreenContainer>
      <View className="justify-center items-center gap-4">
        <Image
          source={require("@assets/pepe-money.png")}
          className="w-[200px] h-[200px]"
        />
        <Text className="font-inter-bold text-white tracking-widest text-3xl">
          Pepe Finances
        </Text>
      </View>
    </ScreenContainer>
  );
}
