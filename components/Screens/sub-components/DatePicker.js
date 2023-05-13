import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";

const DatePicker = ({ navigation }) => {
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

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString(undefined, options);
  };

  const handlePreviousMonth = () => {
    setSelectedDate((prevDate) => {
      const prevMonth = prevDate.getMonth();
      const prevYear = prevDate.getFullYear();
      const newDate = new Date(prevYear, prevMonth - 1, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setSelectedDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 2;
      const nextYear = prevDate.getFullYear();
      const newDate = new Date(nextYear, nextMonth - 1, 1);
      return newDate;
    });
  };

  return (
    <>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={handlePreviousMonth}>
          <ChevronLeft
            size={35}
            color="#424242"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleShowPicker}
          style={styles.dateTextContainer}
        >
          <Calendar
            style={styles.calendarIcon}
            size={18}
            color="#424242"
          />
          <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextMonth}>
          <ChevronRight
            size={35}
            color="#424242"
          />
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dateText: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 10,
    color: "#424242"
  },
  dateTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 6,
    paddingHorizontal: 8,
    borderRadius: 25
  },
  calendarIcon: {
    marginHorizontal: 15
  }
});
