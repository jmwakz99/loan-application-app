import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import Spinner from "@/components/Spinner";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (loaded && !error) {
    return <Spinner size="large" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
