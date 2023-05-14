import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import {
  Adapt,
  Button,
  LinearGradient,
  Select,
  Sheet,
  Text,
  XStack,
  YStack
} from "tamagui";

const SelectDropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [{ name: "Expense" }, { name: "Income" }];

  return (
    <Select
      value={selectedOption}
      onValueChange={setSelectedOption}
    >
      <Select.Trigger
        width={"100%"}
        height={50}
        iconAfter={ChevronDown}
        borderColor="#ccc"
        borderWidth={2}
      >
        <Select.Value placeholder="Choose" />
      </Select.Trigger>

      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          native
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.Viewport
          minWidth={200}
          width={300}
        >
          <XStack>
            <Select.Group>
              {options.map((option, i) => {
                return (
                  <Select.Item
                    index={i}
                    key={option.name}
                    value={option.name.toLowerCase()}
                  >
                    <Select.ItemText>{option.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </XStack>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  );
};

export default SelectDropDown;
