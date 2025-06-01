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
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
          className="text-5xl font-black mb-5 h-20
          dark:text-primary
          text-lightText
          "
        >
          Register
        </Text>
        <View className="mt-14 ">
          <View className="mb-2 w-80 mt-12 items-center flex-row">
            <FontAwesome5 name="user" size={24} color="white" />
            <TextInput
              className="h-12 p-2 border-2 text-xl rounded-2xl w-80 flex-1 ml-3
                    border-r-lightBorder
                    placeholder:pl-6
                    dark:border-r-border dark:text-primarySoft dark:bg-card
                   "
              autoComplete="name"
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#A3A3A3"
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
        </View>
        <View style={{ height: 180 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
