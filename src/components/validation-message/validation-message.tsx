import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getProps } from "./utils";

export type MessageValidationProps = {
  testID?: string;
  type: "error" | "success" | "warning";
  text: string;
};

export function MessageValidation({
  testID = "components.validation-message",
  type,
  text,
}: MessageValidationProps) {
  const message = getProps(type);

  return (
    <View testID={testID} className="flex-row items-center space-x-2 ">
      <Feather name={message.icon} size={20} color={message.iconColor} />
      <Text className={`font-inter-medium tracking-wider ${message.textColor}`}>
        {text}
      </Text>
    </View>
  );
}
