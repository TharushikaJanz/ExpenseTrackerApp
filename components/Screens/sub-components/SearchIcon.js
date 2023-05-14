import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Search } from "@tamagui/lucide-icons";
import { Avatar, Text } from "tamagui";

const SearchIcon = () => {
  // Handle the search action
  const handleSearch = () => {
    console.log("Search icon pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSearch}
        style={styles.searchIconContainer}
      >
        <Search
          size={22}
          color="#000"
        />
      </TouchableOpacity>
      <Avatar
        size={38}
        style={styles.avatar}
      >
        <Text>M</Text>
      </Avatar>
    </View>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16
  },
  searchIconContainer: {
    marginRight: 14
  },
  avatar: {
    backgroundColor: "#EEEEEE",
    borderRadius: 50
  }
});
