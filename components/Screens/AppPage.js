import React from "react";
import { StyleSheet } from "react-native";
import { PlusCircle } from "@tamagui/lucide-icons";
import { Button, XStack, YStack } from "tamagui";

import { MyStack } from "../MyStack";

import DatePicker from "./sub-components/DatePicker";
import ExpensesList from "./sub-components/ExpensesList";
import { dataList1, dataList2 } from "./sub-components/Lists";
import Summary from "./sub-components/Summary";

const AppPage = ({ navigation }) => {
  const handleAddNew = () => {
    navigation.navigate("SelectCategory");
  };
  return (
    <MyStack>
      <YStack>
        <DatePicker />
        <Summary />
        <ExpensesList dataList={dataList1} />
        <ExpensesList dataList={dataList2} />
        <XStack
          space="$2"
          alignSelf="center"
        >
          <Button
            title="Submit"
            style={styles.button}
            color={"#FFFFFF"}
            fontWeight={"500"}
            borderRadius={25}
            fontSize={16}
            icon={PlusCircle}
            scaleIcon={1.5}
            onPress={handleAddNew}
          >
            Add new
          </Button>
        </XStack>
      </YStack>
    </MyStack>
  );
};

export default AppPage;

const styles = StyleSheet.create({
  button: {
    bottom: -15,
    backgroundColor: "#007BEF"
  }
});
