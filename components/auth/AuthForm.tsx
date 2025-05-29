import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

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
      <View className="mt-8 mb-8 w-80 items-center">
        <Text
          className="text-lg mb-2

          dark:text-text
          "
        >
          Email:
        </Text>
        <TextInput
          className="h-12 p-2 text-center border-2 rounded-2xl w-80
          border-r-lightBorder
          dark:border-r-border dark:text-primarySoft dark:bg-card
         "
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="mb-8 w-80 items-center">
        <Text
          className="text-lg mb-2

          dark:text-text
          "
        >
          Password:
        </Text>
        <TextInput
          className="h-12 p-2 text-center border-2  rounded-2xl w-80
          border-r-lightBorder
          dark:border-r-border dark:text-primarySoft dark:bg-card
         "
          secureTextEntry
          autoComplete="password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        className="w-72 h-12 py-2 rounded-2xl items-center mt-8
        dark:bg-button
        "
        activeOpacity={0.7}
        onPress={handleButtonPress}
      >
        <Text className="text-white font-bold text-lg">{labelButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
