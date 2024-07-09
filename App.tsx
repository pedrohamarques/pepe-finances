import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { AuthProvider } from "@contexts/auth-context";

import { useCustomFonts } from "@hooks/useCustomFonts";

import NavigationRoutes from "@routes/navigation";

export default function App() {
  const { error, loaded } = useCustomFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationRoutes />
        <Toast />
      </AuthProvider>
    </NavigationContainer>
  );
}
