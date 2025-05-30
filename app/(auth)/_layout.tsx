import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LoginLayout() {
  return (
    <SafeAreaProvider
      className="flex-1
            dark:bg-darkbg
            "
    >
      <StatusBar style="auto" translucent />
      <Slot />
    </SafeAreaProvider>
  );
}
