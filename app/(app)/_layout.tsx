import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home/home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="habits/create"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
