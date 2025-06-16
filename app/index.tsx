import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    SecureStore.deleteItemAsync("refreshToken");
    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const checkToken = async () => {
      await wait(1500);
      const token = SecureStore.getItem("refreshToken");

      if (token) {
        router.replace("/(app)/home/Home");
      } else {
        router.replace("/(auth)/login");
      }
    };
    checkToken();
  }, [router]);
  return (
    <SafeAreaView className="flex-1 items-center justify-center dark:bg-darkbg">
      <View className="flex-row items-center">
        <View
          className="w-11 h-11 rounded-md mx-1
                dark:bg-[#18181B]
                "
        />
        <View
          className="w-11 h-11 rounded-md mx-1
                dark:bg-[#4C1D95]
                "
        />
        <View
          className="w-11 h-11 rounded-md mx-1
                dark:bg-[#5B21B6]
                "
        />
        <View
          className="w-11 h-11 rounded-md mx-1
                dark:bg-[#6D28D9]
                "
        />
        <View
          className="w-11 h-11 rounded-md mx-1
                dark:bg-[#7C3AED]
                "
        />
        <View
          className="w-11 h-11 rounded-md mx-1
                dark:bg-[#8B5CF6]
                "
        />
      </View>
      <Text
        className="text-2xl opacity-70 mt-5
        dark:text-text
        "
      >
        One Step Every Day...
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
