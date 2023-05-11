import React from "react";
import { StyleSheet, Text } from "react-native";
import { YStack } from "tamagui";

import LogInForm from "../LogInForm";
import { MyStack } from "../MyStack";

export default function LogInPage({ navigation }) {
  return (
    <MyStack>
      <YStack
        space="$5"
        maxWidth={600}
        padding={10}
      >
        <Text
          style={[
            styles.text,
            { fontWeight: "bold", color: "#04021D", fontSize: 40 }
          ]}
        >
          Let&apos;s sign you in.
        </Text>
        <Text style={[styles.text, { color: "#686777" }]}>
          Welcome back{"\n"}to your workspace!
        </Text>
        <LogInForm navigation={navigation} />
      </YStack>
    </MyStack>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
    fontSize: 40,
    letterSpacing: 0.5
  }
});
