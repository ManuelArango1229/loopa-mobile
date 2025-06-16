import getAllHabitByDateService from "@/src/services/getAllHabitByDateService";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";

const getDateOfWeek = (date: Date) => {
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  return dias[date.getDay()];
};
const DailyHabits = () => {
  const [habits, setHabits] = useState({});
  const today = useMemo(() => new Date(), []);

  useEffect((): void => {
    const fetchHabits = async () => {
      const fetchedHabits = await getAllHabitByDateService(
        today.toDateString(),
      );
      setHabits(fetchedHabits);
    };
    fetchHabits();
    console.log(habits);
  }, [today, habits]);
  return (
    <View className="flex-1">
      <Text className="text-white">
        <View>
          <Text
            className="text-2xl mx-8 mt-16
           dark:text-text"
          >
            {getDateOfWeek(today)}
          </Text>
          <Text
            className="text-4xl mx-8 mt-4
           dark:text-text
           "
          >
            {today.toLocaleDateString("es-ES")}
          </Text>
        </View>
        <View></View>
      </Text>
    </View>
  );
};

export default DailyHabits;
