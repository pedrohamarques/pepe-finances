import React from "react";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { ScrollView, ScrollViewProps } from "react-native";

type ScreenContainerProps = React.PropsWithChildren &
  ScrollViewProps & {
    testID?: string;
    customStyle?: string;
    style?: StatusBarStyle;
  };

export function ScreenContainer({
  testID = "components.screen-container",
  customStyle = "",
  style = "light",
  children,
  ...rest
}: ScreenContainerProps) {
  return (
    <ScrollView
      className={` bg-emerald-600 ${customStyle}`}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
      testID={testID}
    >
      <StatusBar style={style} />
      {children}
    </ScrollView>
  );
}
