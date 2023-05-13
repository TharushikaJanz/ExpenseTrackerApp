import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { MyStack } from "../MyStack";

const AppPage = ({ navigation }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleShowPicker = () => {
    setShowPicker(true);
  };

  const handleDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <MyStack>
      <TouchableOpacity onPress={handleShowPicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </MyStack>
  );
};

export default AppPage;

const styles = StyleSheet.create({});
