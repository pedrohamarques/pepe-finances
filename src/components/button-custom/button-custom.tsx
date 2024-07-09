import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
  testID?: string;
  text: string;
  isLoading?: boolean;
};

export function CustomButton({
  text,
  testID = "components.custom-button",
  isLoading = false,
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      disabled={isLoading}
      {...rest}
      className="bg-white p-2 rounded-md"
    >
      <View className="h-7 justify-center items-center">
        {!isLoading ? (
          <Text className="text-emerald-600 font-inter-semi-bold text-lg text-center tracking-wider">
            {text}{" "}
          </Text>
        ) : (
          <ActivityIndicator
            testID="components.button-custom.activity-indicator"
            size="small"
            color="green"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
