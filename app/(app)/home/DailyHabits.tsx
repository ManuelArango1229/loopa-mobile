import getAllHabitByDateService from "@/src/services/getAllHabitByDateService";
import { useEffect, useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import checkHabitService from "@/src/services/checkHabits";
import type GetAllHabitsByDateResponse from "@/src/types/getAllHabitsByDateResponse";
type habit = {
  id: string | undefined;
  name: string;
  description: string;
  createdAt: Date;
};
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
  const [habitsResult, setHabitsResult] =
    useState<GetAllHabitsByDateResponse | null>(null);
  const today = useMemo(() => new Date(), []);
  const [habitChecks, setHabitChecks] = useState<string[]>([]);

  const handleHabitCheck = (habitId: string) => {
    console.log(habitId);
    checkHabitService(habitId, today).then((result) => console.log(result));
    setHabitChecks((prevChecks) =>
      prevChecks.includes(habitId)
        ? prevChecks.filter((c) => c !== habitId)
        : [...prevChecks, habitId],
    );
  };

  useEffect((): void => {
    const fetchHabits = async () => {
      const fetchedHabits = await getAllHabitByDateService(
        today.toDateString(),
      );
      setHabitsResult(fetchedHabits);
    };
    fetchHabits();
  }, [today]);
  return (
    <View className="flex-1">
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
      <View className="mt-20 mx-8">
        {habitsResult?.habits.map((habit: habit) => (
          <Pressable
            key={habit.id}
            className="flex-row items-center mb-4"
            onPress={() => handleHabitCheck(habit.id || "")}
          >
            <View
              className={`w-9 h-9 rounded-md mr-4 items-center justify-center bg-card ${
                habitChecks.includes(habit.id || "")
                  ? "bg-primary"
                  : "border border-border"
              }`}
            />

            <Text className="text-text">{habit.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default DailyHabits;
