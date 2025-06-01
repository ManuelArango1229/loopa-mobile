import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
export type Frequency =
  | { type: "daily" }
  | { type: "weekly"; day: number[] }
  | { type: "custom"; timesPerweek: number };

const createHabitService = async (
  name: string,
  frequency: Frequency,
): Promise<boolean> => {
  const user = await AsyncStorage.getItem("user");
  if (!user) throw new Error("User not found in storage");
  const userId = JSON.parse(user).id;
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_DEV_SERVER_SOCKET}/api/habits/create-habit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await SecureStore.getItemAsync("accessToken")}`,
      },
      body: JSON.stringify({
        name,
        description: "no description",
        frequency,
        userId,
      }),
    },
  );
  if (!response.ok) {
    console.log(response);
    throw new Error(
      `Failed to create habit, ${response.status}: ${await response.text()}`,
    );
  }
  return true;
};

export default createHabitService;
