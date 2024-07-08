import React from "react";
import { Text, View } from "react-native";

import { useCustomFonts } from "@hooks/useCustomFonts";

export default function App() {
  const { error, loaded } = useCustomFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="">Hello World</Text>
    </View>
  );
}
