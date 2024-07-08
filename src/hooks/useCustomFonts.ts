import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export function useCustomFonts() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("assets/fonts/Inter-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return {
    loaded,
    error,
  };
}
