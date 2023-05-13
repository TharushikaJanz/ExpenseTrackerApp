import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { XStack, YStack } from "tamagui";

import { MyStack } from "../MyStack";

import SelectDropDown from "./sub-components/SelectDropDown";

const SelectCategory = () => {
  return (
    <MyStack>
      <YStack space>
        <XStack flex={1}>
          <SelectDropDown />
        </XStack>
      </YStack>
    </MyStack>
  );
};

export default SelectCategory;

const styles = StyleSheet.create({});
