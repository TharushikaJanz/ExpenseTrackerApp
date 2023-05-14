import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, Form, XStack } from "tamagui";

import FormInput from "./FormInput";

const LogInForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignIn = () => {
    navigation.navigate("AppPage");
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
    checkButtonDisabled(value, password);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    checkButtonDisabled(username, value);
  };

  const checkButtonDisabled = (usernameValue, passwordValue) => {
    if (usernameValue !== "" && passwordValue !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleForgotPassword = () => {
    setUsername("email.example@gmail.com");
    setPassword("default");
    setIsButtonDisabled(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  return (
    <Form
      minWidth={300}
      space="$5"
      padding="$3"
    >
      <FormInput
        placeholder={"Phone, email or username"}
        type={"username"}
        value={username}
        onChangeText={handleUsernameChange}
        label={"Email"}
        labelColor={"#686777"}
      />
      <FormInput
        placeholder={"Password"}
        type={"password"}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={!isPasswordVisible}
        label={"Password"}
        showEyeIcon={true}
        onEyeIconPress={togglePasswordVisibility}
        labelColor={"#686777"}
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
      <XStack
        marginTop={150}
        display="flex"
        flexDirection="row"
        alignItems="center"
        paddingHorizontal={10}
      >
        {!isButtonDisabled ? null : (
          <>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text>Don&apos;t have an account?</Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 50, color: "#E2E3E4" }}>|</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotText}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </XStack>
      <XStack
        alignItems="center"
        space="$2"
        margin="$2"
      >
        <Button
          flex={1}
          size={50}
          onPress={handleSignIn}
          backgroundColor={isButtonDisabled ? "#E2E3E4" : "#554AF0"}
          color={"#FFFFFF"}
          fontWeight={"500"}
          fontSize={16}
          disabled={isButtonDisabled}
        >
          Sign In
        </Button>
      </XStack>
    </Form>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  forgotText: {
    color: "#554AF0",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 14
  }
});
