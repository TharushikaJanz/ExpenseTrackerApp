import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Adapt, Image, Select, Sheet, Text, XStack, YStack } from "tamagui";

import { images } from "./Lists";

const CategorySelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // Display only three items per row
  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

  return (
    <XStack flex={1}>
      <Text style={styles.label}>Category name</Text>
      <Select
        value={selectedOption}
        onValueChange={setSelectedOption}
      >
        <Select.Trigger
          width={"100%"}
          height={50}
          borderColor="#007BEF"
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
            <Sheet.Frame height={300}>
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
            <Select.Group>
              <Select.Label
                textAlign="center"
                fontSize={10}
                letterSpacing={1.5}
                color={"#424242"}
              >
                CHOOSE CATEGORY
              </Select.Label>
            </Select.Group>
            <XStack
              space={10}
              padding={5}
              alignItems="center"
              justifyContent="center"
            >
              {rows.map((row, rowIndex) => (
                <YStack
                  key={rowIndex}
                  space="$2"
                >
                  {row.map((item, columnIndex) => (
                    <Select.Item
                      index={columnIndex}
                      key={item.label}
                      value={item.label.toLowerCase()}
                    >
                      <YStack
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Select.Item>
                          <Image
                            source={item.path}
                            style={styles.image}
                          />
                        </Select.Item>
                        <Select.ItemText
                          fontSize={12}
                          color={"#424242"}
                          letterSpacing={0.4}
                          fontWeight={"400"}
                        >
                          {item.label}
                        </Select.ItemText>
                      </YStack>
                    </Select.Item>
                  ))}
                </YStack>
              ))}
            </XStack>
          </Select.Viewport>
        </Select.Content>
      </Select>
    </XStack>
  );
};

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    top: -8,
    left: 16,
    fontSize: 12,
    fontWeight: "400",
    paddingHorizontal: 4,
    color: "#006ADD",
    backgroundColor: "#fff",
    zIndex: 1000
  },
  image: {
    width: 40,
    height: 40
  }
});

export default CategorySelect;
