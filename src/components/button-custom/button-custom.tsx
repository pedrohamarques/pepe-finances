import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
  testID?: string;
  text: string;
};

export function CustomButton({
  text,
  testID = "components.custom-button",
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      {...rest}
      className="bg-white p-2 rounded-md"
    >
      <Text className="text-emerald-600 font-inter-semi-bold text-lg text-center tracking-wider">
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );
}
