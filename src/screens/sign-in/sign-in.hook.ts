import { useReducer, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

import { supabase } from "@services/supabase";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

import { ACTION_KIND, loginReducer, LoginState } from "./reducers";
import { loginSchema } from "./schemas";
import { useAuthContext } from "@contexts/auth-context";

const initialState: LoginState = {
  email: "",
  password: "",
  errors: [],
  isLoading: false,
};

export function useSignInScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { login } = useAuthContext();

  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  function handlePasswordVisibility() {
    setIsPasswordVisible((previousState) => !previousState);
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  function handleEmailFill(text: string) {
    dispatch({ type: ACTION_KIND.EMAIL, payload: text });
  }

  function handlePasswordFill(text: string) {
    dispatch({ type: ACTION_KIND.PASSWORD, payload: text });
  }

  function handleSignUpPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_UP);
  }

  async function handleLogin() {
    dispatch({ type: ACTION_KIND.SUBMIT });

    const { success, error: zodError } = loginSchema.safeParse({
      email: loginState.email,
      password: loginState.password,
    });

    if (!success) {
      return dispatch({ type: ACTION_KIND.ERROR, payload: zodError.errors });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginState.email,
      password: loginState.password,
    });

    if (error)
      Toast.show({ type: "error", text1: "Error", text2: error.message });

    if (data.session) {
      login(data.session);
    }

    dispatch({ type: ACTION_KIND.RESET });
  }

  return {
    isPasswordVisible,
    handlePasswordVisibility,
    handleSignUpPress,
    loginState,
    handleEmailFill,
    handlePasswordFill,
    handleLogin,
  };
}
