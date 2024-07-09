import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

export function useSignInScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  function handlePasswordVisibility() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  function handleSignUpPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_UP);
  }

  return {
    isPasswordVisible,
    handlePasswordVisibility,
    handleSignUpPress,
  };
}
