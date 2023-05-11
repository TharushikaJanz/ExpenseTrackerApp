import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Eye } from "@tamagui/lucide-icons";
import { Button, Form, Input, XStack } from "tamagui";

const LogInForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
    setPassword("defaultPassword");
    setIsButtonDisabled(false);
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
      />
      <FormInput
        placeholder={"Password"}
        type={"password"}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        label={"Password"}
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
          color={isButtonDisabled ? "#FFFFFF" : "#FFFFFF"}
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

function FormInput(props) {
  const { placeholder, type, value, onChangeText, secureTextEntry, label } =
    props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <XStack alignItems="center">
      <Input
        flex={1}
        placeholder={isFocused ? "" : placeholder}
        textContentType={type}
        size={50}
        padding="$3"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
    </XStack>
  );
}

const styles = StyleSheet.create({
  forgotText: {
    color: "#554AF0",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 14
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
    top: 14
  },
  labelContainer: {
    position: "absolute",
    top: -8,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5
  },
  label: {
    fontSize: 12,
    color: "#686777"
  }
});
