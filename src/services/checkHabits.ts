import * as SecureStore from "expo-secure-store";

const checkHabitService = async (
  habitId: string,
  date: Date,
): Promise<boolean> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_DEV_SERVER_SOCKET}/api/habits/check`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await SecureStore.getItemAsync("accessToken")}`,
      },
      body: JSON.stringify({
        habitId,
        date,
      }),
    },
  );
  console.log(response);
  return response.ok;
};
export default checkHabitService;
