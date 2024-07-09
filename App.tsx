import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { AuthProvider } from "@contexts/auth-context";

import { useCustomFonts } from "@hooks/useCustomFonts";

import PublicRoutes from "@routes/public-routes";

export default function App() {
  const { error, loaded } = useCustomFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <PublicRoutes />
        <Toast />
      </AuthProvider>
    </NavigationContainer>
  );
}
