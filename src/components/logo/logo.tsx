import React from "react";
import { Image, Text, View } from "react-native";

type LogoProps = {
  testID?: string;
};

export function Logo({ testID = "components.logo" }: LogoProps) {
  return (
    <View className="justify-center items-center gap-4" testID={testID}>
      <Image
        source={require("@assets/pepe-money.png")}
        className="w-[200px] h-[200px]"
      />
      <Text className="font-inter-bold text-white tracking-widest text-3xl">
        Pepe Finances
      </Text>
    </View>
  );
}
