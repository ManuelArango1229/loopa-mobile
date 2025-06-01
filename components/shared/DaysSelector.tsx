import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
type DaysSelectorProps = {
  selectedDays: string[];
  setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
};
const DaysSelector = ({ selectedDays, setSelectedDays }: DaysSelectorProps) => {
  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <View className="px-6 mt-4">
      {daysOfWeek.map((day) => (
        <Pressable
          key={day}
          onPress={() => toggleDay(day)}
          className="flex-row items-center mb-4"
        >
          <View
            className={`w-9 h-9 rounded-md mr-4 items-center justify-center bg-card ${
              selectedDays.includes(day) ? "bg-primary" : "border border-border"
            }`}
          >
            {selectedDays.includes(day) && (
              <Entypo name="check" size={16} color="black" />
            )}
          </View>
          <Text className="text-white  text-semibold text-lg">{day}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default DaysSelector;
