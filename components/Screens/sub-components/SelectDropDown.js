import { useState } from "react";
import React from "react";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Select, Sheet, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const SelectDropDown = () => {
  const [val, setVal] = useState("Choose");

  return (
    <Select
      id="category"
      value={val}
      onValueChange={setVal}
    >
      <Select.Trigger
        width={"100%"}
        height={50}
        iconAfter={ChevronDown}
        borderColor="#ccc"
      >
        <Select.Value placeholder={val} />
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
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "$backgroundTransparent"]}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          minWidth={200}
          width={300}
        >
          <XStack>
            <Select.Group space="$0">
              {items.map((item, i) => {
                return (
                  <Select.Item
                    index={i}
                    key={item.name}
                    value={item.name.toLowerCase()}
                  >
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$backgroundTransparent", "$background"]}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
};

export default SelectDropDown;

const items = [{ name: "Expense" }, { name: "Income" }];
