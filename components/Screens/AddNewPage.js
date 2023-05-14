import React, { useState } from "react";
import { Button, Form, XStack, YStack } from "tamagui";

import { MyStack } from "../MyStack";

import CategorySelect from "./sub-components/CategorySelect";
import FormInput from "./sub-components/FormInput";
import SelectDropDown from "./sub-components/SelectDropDown";

const AddNewPage = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleDescription = (value) => {
    setDescription(value);
  };

  const handleAddNewExpense = () => {
    navigation.navigate("AppPage");
  };

  return (
    <MyStack>
      <Form>
        <YStack space>
          <SelectDropDown />
          <CategorySelect />
          <YStack
            marginTop={48}
            space
          >
            <FormInput
              value={amount}
              margin={50}
              onChangeText={handleAmountChange}
              placeholder={"Enter Amount"}
              label={"Amount"}
              labelColor={"#006ADD"}
              borderWidth={2}
              keyboardType={"numeric"}
            />
            <FormInput
              value={description}
              margin={100}
              onChangeText={handleDescription}
              placeholder={"Description(optional)"}
              label={"Description"}
              labelColor={"#006ADD"}
              borderWidth={2}
            />
          </YStack>
          <XStack
            alignItems="center"
            space="$2"
            margin="$2"
            marginTop={400}
            flex={1}
          >
            <Button
              flex={1}
              size={50}
              onPress={handleAddNewExpense}
              backgroundColor={"#007BEF"}
              color={"#FFFFFF"}
              fontWeight={"500"}
              fontSize={16}
              borderRadius={25}
            >
              Add new expense
            </Button>
          </XStack>
        </YStack>
      </Form>
    </MyStack>
  );
};

export default AddNewPage;
