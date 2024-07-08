import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PUBLIC_ROUTES, PublicRoutesParams } from "@typings/routes";

export function useWelcomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PublicRoutesParams>>();

  function handleSignInPress() {
    navigation.navigate(PUBLIC_ROUTES.SIGN_IN);
  }

  return {
    handleSignInPress,
  };
}
