import type React from "react";
import { View, Text } from "react-native";
const DAYS = ["D", "L", "M", "M", "J", "V", "S"];
const WEEKS = 5;
const HabitGrid: React.FC = () => {
  const TOTAL_SQUARES = DAYS.length * WEEKS;
  return (
    <View className="flex-col items-center mt-8">
      <View className="flex-row flex-wrap w-[295] h-64">
        {Array.from({ length: TOTAL_SQUARES }).map((_, index) => (
          <View
            key={`index-${index + 1}`}
            className="w-10 h-10 bg-card rounded-md m-1"
          />
        ))}
      </View>
      <View className="justify-between px-2 flex-row">
        {DAYS.map((day, index) => (
          <Text
            key={`index-${index + 1}`}
            className="text-text text-lg text-bold h-6 text-center mx-[15]"
          >
            {day}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HabitGrid;
