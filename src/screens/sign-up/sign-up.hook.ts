import { useReducer, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { supabase } from "@services/supabase";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

import { registerSchema } from "./schemas";
import { ACTION_KIND, SignUpState, submitReducer } from "./reducers";

const initialState: SignUpState = {
  confirmPassword: "",
  password: "",
  email: "",
  isLoading: false,
  errors: [],
};

export function useSignUpScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmIsPasswordVisible] =
    useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  const [submitState, dispatch] = useReducer(submitReducer, initialState);

  function handleEmailFill(text: string) {
    dispatch({ type: ACTION_KIND.EMAIL, payload: text });
  }

  function handlePasswordFill(text: string) {
    dispatch({ type: ACTION_KIND.PASSWORD, payload: text });
  }

  function handleConfirmPasswordFill(text: string) {
    dispatch({ type: ACTION_KIND.CONFIRM_PASSWORD, payload: text });
  }

  function handlePasswordVisibility() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  function handleConfirmPasswordVisibility() {
    setConfirmIsPasswordVisible((previousState) => !previousState);
  }

  function handleSignInPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
  }

  console.log(submitState.errors);

  async function handleRegister() {
    dispatch({ type: ACTION_KIND.SUBMIT });

    const { success, error: zodError } = registerSchema.safeParse({
      email: submitState.email,
      password: submitState.password,
      confirmPassword: submitState.confirmPassword,
    });

    if (!success) {
      return dispatch({ type: ACTION_KIND.ERROR, payload: zodError.errors });
    }

    const { data, error } = await supabase.auth.signUp({
      email: submitState.email,
      password: submitState.password,
    });

    if (error) Alert.alert(error.message);
    if (!data.session) Alert.alert("Please check your e-mail");
    console.log(data, "account created");

    dispatch({ type: ACTION_KIND.RESET });
  }

  return {
    isPasswordVisible,
    isConfirmPasswordVisible,
    submitState,
    handleEmailFill,
    handlePasswordFill,
    handleConfirmPasswordFill,
    handlePasswordVisibility,
    handleConfirmPasswordVisibility,
    handleSignInPress,
    handleRegister,
  };
}
