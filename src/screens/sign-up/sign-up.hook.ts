import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

export function useSignUpScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmIsPasswordVisible] =
    useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  function handlePasswordVisibility() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  function handleConfirmPasswordVisibility() {
    setConfirmIsPasswordVisible((previousState) => !previousState);
  }

  function handleSignInPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
  }

  return {
    isPasswordVisible,
    isConfirmPasswordVisible,
    handlePasswordVisibility,
    handleConfirmPasswordVisibility,
    handleSignInPress,
  };
}
