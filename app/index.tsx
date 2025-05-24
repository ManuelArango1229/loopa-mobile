import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setEmail("");
    setPassword("");
    console.log("Email:", email);
    console.log("Password:", password);
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

    fetch("http://10.0.2.2:3000/api/users/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const { accessToken, refreshToken, user } = JSON.parse(result);
        SecureStore.setItem("refreshToken", refreshToken);
        SecureStore.setItem("accessToken", accessToken);
        AsyncStorage.setItem("user", JSON.stringify(user));
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

        <View className="mb-8 w-80 items-center">
          <Text className="text-lg dark:text-primarySoft mb-2">Email:</Text>
          <TextInput
            className="h-10 p-2 text-center border dark:border-r-border border-r-lightBorder rounded-full w-80 dark:text-primarySoft"
            autoComplete="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="mb-8 w-80 items-center">
          <Text className="text-lg dark:text-primarySoft mb-2">Password:</Text>
          <TextInput
            className="h-10 p-2 text-center rounded-full w-80 border border-r-lightBorder dark:border-r-border dark:text-primarySoft"
            secureTextEntry
            autoComplete="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          className="w-80 bg-primary py-3 rounded-full items-center mt-8"
          activeOpacity={0.7}
          onPress={handleLogin}
        >
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>

        <View style={{ height: 200 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Index;
