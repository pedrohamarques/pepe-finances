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
import { CustomButton } from "@components/button-custom";

import { useSignUpScreen } from "./sign-up.hook";

export function SignUpScreen() {
  const {
    handleConfirmPasswordVisibility,
    handlePasswordVisibility,
    handleSignInPress,
    handlePasswordFill,
    handleConfirmPasswordFill,
    handleEmailFill,
    handleRegister,
    isPasswordVisible,
    isConfirmPasswordVisible,
    submitState,
  } = useSignUpScreen();

  return (
    <ScreenContainer testID="screens.sign-up.screen-container">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Logo testID="screens.sign-up.logo" />
        <View className="justify-center items-center w-full space-y-4 mt-10">
          <Text className="font-inter-semi-bold text-white tracking-widest text-2xl">
            Sign Up
          </Text>

          <View className="p-4 mt-4 justify-center w-full">
            <CustomInput
              placeholder="E-mail"
              icon="user"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              containerStyle="mb-4"
              testID="screens.sign-up.custom-input.email"
              value={submitState.email}
              onChangeText={handleEmailFill}
            />
            <CustomInput
              placeholder="Password"
              icon="lock"
              secureTextEntry={!isPasswordVisible}
              containerStyle="mb-4"
              testID="screens.sign-up.custom-input.password"
              value={submitState.password}
              onChangeText={handlePasswordFill}
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
            <CustomInput
              placeholder="Confirm password"
              icon="lock"
              secureTextEntry={!isConfirmPasswordVisible}
              containerStyle="mb-4"
              value={submitState.confirmPassword}
              onChangeText={handleConfirmPasswordFill}
              testID="screens.sign-up.custom-input.confirm-password"
            >
              <TouchableOpacity
                className="justify-center items-center"
                onPress={handleConfirmPasswordVisibility}
              >
                <Feather
                  name={isConfirmPasswordVisible ? "eye" : "eye-off"}
                  size={20}
                  color="green"
                />
              </TouchableOpacity>
            </CustomInput>

            <View className="space-y-4 mt-10">
              <CustomButton
                onPress={handleRegister}
                text="Register"
                testID="screens.sign-up.custom-button.register"
                isLoading={submitState.isLoading}
              />

              <View className=" flex-row justify-center items-center mt-4">
                <Text className="font-inter-medium tracking-wider text-lg text-white">
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={handleSignInPress}>
                  <Text className="font-inter-semi-bold underline tracking-wider text-lg text-white">
                    Sign In!
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
