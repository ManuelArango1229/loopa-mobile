import * as SecureStore from "expo-secure-store";
import type GetAllHabitsByDateResponse from "../../src/types/getAllHabitsByDateResponse";
const getAllHabitByDateService = async (
  date: string,
): Promise<GetAllHabitsByDateResponse> => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_DEV_SERVER_SOCKET}/api/habits/?date=${date}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-mobile-app": "true",
          Authorization: `Bearer ${SecureStore.getItem("accessToken")}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch habits, ${response.status}: ${response.statusText}`,
      );
    }
    const data: GetAllHabitsByDateResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Get Habits error:", error);
    throw new Error("Get Habits  failed. Please try again.");
  }
};

export default getAllHabitByDateService;
