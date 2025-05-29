import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" translucent />
      <Stack>
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
    </>
  );
}
