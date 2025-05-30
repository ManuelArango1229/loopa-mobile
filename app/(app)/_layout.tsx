import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" translucent />
      <View
        className="flex-1
        bg-lightbg
        dark:bg-darkbg
        "
      >
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
