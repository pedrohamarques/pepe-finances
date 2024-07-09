import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { ScreenContainer } from "@components/screen-container";
import { Logo } from "@components/logo";
import { CustomInput } from "@components/input-custom";
import { MessageValidation } from "@components/validation-message";
import { CustomButton } from "@components/button-custom";

import { useSignInScreen } from "./sign-in.hook";

export function SignInScreen() {
  const {
    isPasswordVisible,
    loginState,
    handleEmailFill,
    handlePasswordFill,
    handleSignUpPress,
    handlePasswordVisibility,
    handleLogin,
  } = useSignInScreen();

  return (
    <ScreenContainer testID="screens.sign-in.screen-container">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Logo testID="screens.sign-in.logo" />
        <View className="justify-center items-center w-full space-y-4 mt-10">
          <Text className="font-inter-semi-bold text-white tracking-widest text-2xl">
            Sign In
          </Text>

          <View className="p-4 mt-4 justify-center w-full">
            <CustomInput
              placeholder="E-mail"
              icon="user"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              containerStyle="mb-4"
              testID="screens.sign-in.custom-input.email"
              value={loginState.email}
              onChangeText={handleEmailFill}
            />
            <CustomInput
              placeholder="Password"
              icon="lock"
              secureTextEntry={!isPasswordVisible}
              containerStyle="mb-4"
              value={loginState.password}
              onChangeText={handlePasswordFill}
              testID="screens.sign-in.custom-input.password"
            >
              <TouchableOpacity
                className="justify-center items-center"
                onPress={handlePasswordVisibility}
              >
                <Feather
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  size={20}
                  color="green"
                />
              </TouchableOpacity>
            </CustomInput>

            {loginState.errors.map((error, index) => (
              <MessageValidation
                key={error.path[0]}
                text={error.message}
                type="error"
                testID={`screens.sign-in.message-validation-${index}`}
              />
            ))}

            <View className="space-y-4 mt-10">
              <CustomButton
                isLoading={loginState.isLoading}
                text="Login"
                onPress={handleLogin}
                testID="screens.sign-in.custom-button.login"
              />

              <View className=" flex-row justify-center items-center mt-4">
                <Text className="font-inter-medium tracking-wider text-lg text-white">
                  Don&apos;t have an account?{" "}
                </Text>
                <TouchableOpacity onPress={handleSignUpPress}>
                  <Text className="font-inter-semi-bold underline tracking-wider text-lg text-white">
                    Sign Up!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}
