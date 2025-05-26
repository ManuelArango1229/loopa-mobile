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
        <Text className="text-lg dark:text-primarySoft mb-2">Email:</Text>
        <TextInput
          className="h-15 p-2 text-center border dark:border-r-border border-r-lightBorder rounded-full w-80 dark:text-primarySoft"
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="mb-8 w-80 items-center">
        <Text className="text-lg dark:text-primarySoft mb-2">Password:</Text>
        <TextInput
          className="h-15 p-2 text-center rounded-full w-80 border border-r-lightBorder dark:border-r-border dark:text-primarySoft"
          secureTextEntry
          autoComplete="password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        className="w-72 h-15 bg-primary py-2 rounded-full items-center mt-8"
        activeOpacity={0.7}
        onPress={handleButtonPress}
      >
        <Text className="text-white font-bold text-lg">{labelButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
