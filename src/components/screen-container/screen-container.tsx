import React from "react";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { View } from "react-native";

type ScreenContainerProps = React.PropsWithChildren & {
  testID?: string;
  customStyle?: string;
  style?: StatusBarStyle;
};

export function ScreenContainer({
  testID = "components.screen-container",
  customStyle = "",
  style = "light",
  children,
}: ScreenContainerProps) {
  return (
    <View
      className={`flex-1 justify-center items-center bg-emerald-600 ${customStyle}`}
      testID={testID}
    >
      <StatusBar style={style} />
      {children}
    </View>
  );
}
