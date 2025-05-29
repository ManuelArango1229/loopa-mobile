import { View, Text, TextInput } from "react-native";

const home = () => {
  return (
    <View
      className="flex-1
      dark:bg-darkbg
      "
    >
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
        />
      </View>
      <View className="mt-7 mx-8">
        <Text
          className="text-lg
          dark:text-text
          "
        >
          ¿Con que Frecuencia?
        </Text>
      </View>
    </View>
  );
};

export default home;
