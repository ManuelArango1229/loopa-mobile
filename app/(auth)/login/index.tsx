import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";

import AuthForm from "../../../components/auth/AuthForm";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-mobile-app", "true");

    const raw = JSON.stringify({
      email: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log("fetch");
    fetch("http://192.168.18.3:3000/api/users/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result", result);
        const { accessToken, refreshToken, user } = JSON.parse(result);
        SecureStore.setItem("refreshToken", refreshToken);
        SecureStore.setItem("accessToken", accessToken);
        AsyncStorage.setItem("user", JSON.stringify(user));
        setEmail("");
        setPassword("");
        router.navigate("/(app)/home/home");
      })
      .catch((error) => console.log("error", error));
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
        <Text className="text-4xl font-bold dark:text-primary mb-20">
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
          <Text className="text-primarySoft mb-3 text-xl">
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
