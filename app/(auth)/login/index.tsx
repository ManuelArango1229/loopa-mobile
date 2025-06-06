import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { Link, useRouter } from "expo-router";
import authService from "@/src/services/authService";
import AuthForm from "../../../components/auth/AuthForm";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    console.log(process.env.EXPO_PUBLIC_DEV_BYPASS_AUTH);
    if (process.env.EXPO_PUBLIC_DEV_BYPASS_AUTH === "true") {
      console.log("Bypassing authentication in development mode");
      router.replace("/(app)/home/home");
      return;
    }

    const result = authService(email, password);
    result.then(() => {
      setEmail("");
      setPassword("");
      router.replace("/(app)/home/home");
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      className="flex-1"
    >
      <ScrollView
        className="dark:bg-darkbg bg-lightbg flex-1"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <Text className="text-5xl font-black dark:text-primary mb-28">
          LOOPA
        </Text>

        <AuthForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          labelButton="Iniciar Sesión"
          handleButtonPress={handleLogin}
        />

        <View className="mt-10 items-center">
          <Text
            className="mb-3 text-xl
            dark:text-text
            "
          >
            ¿No tienes Cuenta?
          </Text>
          <Link href="/(auth)/register">
            <Text className="text-primary text-xl">Registrate</Text>
          </Link>
        </View>

        <View style={{ height: 200 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Index;
