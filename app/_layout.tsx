import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ApolloProvider } from "@apollo/client";

import Spinner from "@/components/Spinner";
import LoanApplicationProvider from "@/context/LoanApplicationContext";
import client from "@/lib/apolloClient";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return <Spinner size="large" />;
  }

  return (
    <ApolloProvider client={client}>
      <LoanApplicationProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="LoanApplication" />
        </Stack>
      </LoanApplicationProvider>
    </ApolloProvider>
  );
};

export default RootLayout;
