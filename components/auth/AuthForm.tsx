import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

interface AuthFormProps extends TextInputProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  labelButton: string;
  handleButtonPress: () => void;
}

const AuthForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleButtonPress,
  labelButton,
}: AuthFormProps) => {
  return (
    <View className="items-center justify-center">
      <View className="mt-2 mb-6 w-80 items-center flex-row">
        <Fontisto name="email" size={24} color="white" />
        <TextInput
          className="h-12 p-2 border-2 text-xl rounded-2xl w-80 flex-1 ml-3 mt-3
          placeholder:pl-6
          border-r-lightBorder
          dark:border-r-border dark:text-primarySoft dark:bg-card
         "
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#A3A3A3"
        />
      </View>

      <View className="mb-10 w-80 items-center flex-row mt-px">
        <AntDesign name="lock1" size={24} color="white" />
        <TextInput
          className="h-12 p-2 border-2  text-xl rounded-2xl w-80 ml-3 flex-1
          placeholder:pl-6
          border-r-lightBorder
          dark:border-r-border dark:text-primarySoft dark:bg-card
         "
          secureTextEntry
          autoComplete="password"
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#A3A3A3"
        />
      </View>

      <TouchableOpacity
        className="w-72 h-14 rounded-xl items-center mt-24 overflow-hidden
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
          <Text className=" font-semibold text-white text-xl">
            {labelButton}
          </Text>
          <Feather
            name="arrow-right"
            size={24}
            color="white"
            className="absolute right-4"
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
