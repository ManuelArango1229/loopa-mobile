import HabitGrid from "@/components/home/habitGrid";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const Overview = () => {
  const router = useRouter();
  const handleNewHabit = () => {
    router.navigate("/(app)/habits/create");
  };
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between px-4 py-2 mt-16">
        <View>
          <View className="flex-row items-center">
            <View
              className="w-7 h-7 rounded-md m-px
              bg-[#18181B]
          "
            />
            <View
              className="w-7 h-7 rounded-md m-px
              bg-[#4C1D95]
          "
            />
            <View
              className="w-7 h-7 rounded-md m-px
              bg-[#5B21B6]
          "
            />
            <View
              className="w-7 h-7 rounded-md m-px
              bg-[#6D28D9]
          "
            />
            <View
              className="w-7 h-7 rounded-md m-px
              bg-[#7C3AED]
          "
            />
            <View
              className="w-7 h-7 rounded-md m-px
              bg-[#8B5CF6]
          "
            />
          </View>
          <Text
            className="text-4xl mt-2 font-extrabold mx-4
            dark:text-text
            "
          >
            Hábitos
          </Text>
        </View>
        <TouchableOpacity
          className="border-2 text-violet-500  rounded-md px-3 py-1 flex-row items-center gap-x-1 h-12 w-32 justify-center
          dark:border-border
          "
          activeOpacity={0.7}
          onPress={handleNewHabit}
        >
          <Text
            className="font-bold text-lg
            dark:text-text
            "
          >
            + Nuevo
          </Text>
        </TouchableOpacity>
      </View>
      <HabitGrid />
    </View>
  );
};

export default Overview;
