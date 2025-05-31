import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState } from "react";
import SplashScreen from "./splashScreen";

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);

  if (!isAppReady) {
    return <SplashScreen onFinish={() => setIsAppReady(true)} />;
  }
  return (
    <View className="flex-1">
      <StatusBar style="auto" translucent />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="(app)"
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
      </Stack>
    </View>
  );
}
