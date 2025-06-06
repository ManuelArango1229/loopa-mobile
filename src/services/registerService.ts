const registerService = async (
  name: string,
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_DEV_SERVER_SOCKET}/api/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-mobile-app": "true",
        },
        body: JSON.stringify({ name, email, password }),
      },
    );
    if (!response.ok) {
      throw new Error(
        `Failed to registration, ${response.status}: ${response.text}`,
      );
    }
    return true;
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error("Registration failed. Please try again.");
  }
};

export default registerService;
