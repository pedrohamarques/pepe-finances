import { useState } from "react";

export function useSignInScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibility() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  return {
    isPasswordVisible,
    handlePasswordVisibility,
  };
}
