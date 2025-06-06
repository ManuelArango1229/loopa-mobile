import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
const authService = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_DEV_SERVER_SOCKET}/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-mobile-app": "true",
        },
        body: JSON.stringify({ email, password }),
      },
    );
    if (!response.ok) {
      throw new Error(`Failed to login, ${response.status}: ${response.text}`);
    }
    const { accessToken, refreshToken, user } = await response.json();

    await SecureStore.setItemAsync("refreshToken", refreshToken);
    await SecureStore.setItemAsync("accessToken", accessToken);
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return true;
  } catch (error) {
    console.error("Authentication error:", error);
    throw new Error("Authentication failed. Please try again.");
  }
};

export default authService;
