import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Eye } from "@tamagui/lucide-icons";
import { Input, XStack } from "tamagui";

const FormInput = (props) => {
  const {
    placeholder,
    type,
    value,
    onChangeText,
    secureTextEntry,
    label,
    showEyeIcon,
    onEyeIconPress,
    labelColor,
    borderWidth,
    keyboardType
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (text) => {
    onChangeText(text);
  };

  const shouldShowLabel = isFocused || value !== "";

  return (
    <XStack alignItems="center">
      <Input
        flex={1}
        placeholder={shouldShowLabel ? "" : placeholder}
        textContentType={type}
        size={50}
        padding="$3"
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        borderWidth={borderWidth ? 2 : 1}
        keyboardType={keyboardType}
      />
      {shouldShowLabel && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
        </View>
      )}
      {showEyeIcon && (
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={onEyeIconPress}
        >
          <Eye
            size={20}
            color="#686777"
          />
        </TouchableOpacity>
      )}
    </XStack>
  );
};

export default FormInput;

const styles = StyleSheet.create({
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
    fontSize: 12
  }
});
