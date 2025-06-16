import DaysSelector from "@/components/shared/DaysSelector";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import createHabitService from "@/src/services/createHabitService";
import type { Frequency } from "@/src/services/createHabitService";
import { useRouter } from "expo-router";

const areEqual = (a: number[], b: number[]) =>
  a.length === b.length && a.every((val, index) => val === b[index]);
const dayToIndex: Record<string, number> = {
  Domingo: 0,
  Lunes: 1,
  Martes: 2,
  Miércoles: 3,
  Jueves: 4,
  Viernes: 5,
  Sábado: 6,
};
const Home = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [habitName, setHabitName] = useState("");
  const router = useRouter();
  const handleButtonPress = () => {
    const selectedDaysIndices = selectedDays
      .map((day) => dayToIndex[day])
      .sort((a, b) => a - b);
    let frequency: Frequency;
    if (areEqual(selectedDaysIndices, [0, 1, 2, 3, 4, 5, 6])) {
      frequency = { type: "daily" };
    } else {
      frequency = {
        type: "weekly",
        day: selectedDaysIndices,
      };
    }
    createHabitService(habitName, frequency).then(() => {
      setHabitName("");
      setSelectedDays([]);
      Alert.alert("Hábito creado correctamente");
      router.replace("/(app)/home/Home");
    });
  };
  return (
    <View className="flex-1">
      <Text
        className="text-4xl mx-8 mt-16
       dark:text-text
       "
      >
        Crear Hábito
      </Text>
      <View className="">
        <Text
          className="text-lg mx-8 mt-8
          dark:text-text"
        >
          ¿Qué meta quieres alcanzar?
        </Text>
        <TextInput
          className="
            h-14 w-10/12 rounded-md mt-4 mx-auto placeholder:text-center placeholder:opacity-50
            dark:bg-card dark:placeholder:text-text
          "
          placeholder="Ej: Hacer ejercicio"
          value={habitName}
          onChangeText={setHabitName}
        />
      </View>
      <View className="mt-7 mx-8">
        <Text
          className="text-lg mb-3
          dark:text-text
          "
        >
          ¿Con que Frecuencia?
        </Text>
        <DaysSelector
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </View>
      <TouchableOpacity
        className="w-72 h-14 rounded-xl items-center mt-20 overflow-hidden mx-auto
        dark:bg-button
        "
        activeOpacity={0.7}
        onPress={handleButtonPress}
      >
        <LinearGradient
          colors={["#A162E8", "#6236FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-row items-center justify-center w-full h-full px-6 relative"
        >
          <FontAwesome5 name="check" size={24} color="white" />
          <Text className="ml-2 font-semibold text-white text-xl">
            Registrar
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
