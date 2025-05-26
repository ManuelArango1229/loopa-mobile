import AuthForm from "@/components/auth/AuthForm";
import { useState } from "react";
import { Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};
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
        <Text className="text-4xl font-bold mb-4">Register</Text>

        <AuthForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          labelButton="Register"
          handleButtonPress={handleRegister}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
