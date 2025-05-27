import AuthForm from "@/components/auth/AuthForm";
import { router } from "expo-router";
import { useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput,
  Alert,
} from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-mobile-app", "true");

    const raw = JSON.stringify({
      name: name,
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
    fetch("http://192.168.18.3:3000/api/users/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName("");
        setEmail("");
        setPassword("");
        Alert.alert(
          "Success",
          "Registro exitoso, inicia sesion " + result.name,
        );
        router.navigate("/(auth)/login");
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
        <Text
          className="text-4xl font-bold mb-4
          dark:text-primary
          text-lightText
          "
        >
          Register
        </Text>
        <View className="mb-2 w-80 mt-12 items-center">
          <Text className="text-lg dark:text-primarySoft mb-2">Name:</Text>
          <TextInput
            className="h-15 p-2 text-center rounded-full w-80 border border-r-lightBorder dark:border-r-border dark:text-primarySoft"
            autoComplete="name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <AuthForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          labelButton="Register"
          handleButtonPress={handleRegister}
        />
        <View style={{ height: 180 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
