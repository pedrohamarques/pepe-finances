import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type CustomInputProps = TextInputProps & {
  testID?: string;
  icon: keyof typeof Feather.glyphMap;
  containerStyle?: string;
  children?: React.PropsWithChildren;
};

export function CustomInput({
  testID = "components.custom-input",
  icon,
  containerStyle = "",
  children,
  ...rest
}: CustomInputProps) {
  return (
    <View
      testID={testID}
      className={`flex-row justify-between items-center bg-white px-4 rounded-md h-14 ${containerStyle}`}
    >
      <View className="flex-row space-x-4">
        <Feather name={icon} color="green" size={20} />
        <TextInput className="text-lg tracking-wider w-[80%]" {...rest} />
      </View>

      {children}
    </View>
  );
}
