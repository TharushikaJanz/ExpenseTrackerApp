import React from "react";
import { StyleSheet } from "react-native";
import { Image, ListItem, Text, XGroup, XStack, YGroup } from "tamagui";

const ExpensesList = ({ dataList }) => {
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    dataList.forEach((item) => {
      totalAmount += parseInt(item.amount.replace(/[^0-9-]/g, ""));
    });
    return totalAmount;
  };

  return (
    <YGroup
      alignSelf="center"
      bordered
      size="$4"
      marginTop={15}
    >
      <XGroup
        justifyContent="space-between"
        backgroundColor={"#fff"}
        alignItems="center"
        space="$2"
        padding={10}
        paddingHorizontal={20}
      >
        <Text style={styles.titleText}>TODAY</Text>
        <Text style={styles.totalAmountText}>₹ {calculateTotalAmount()}</Text>
      </XGroup>
      {dataList.map((item) => (
        <YGroup.Item key={item.id}>
          <ListItem
            hoverTheme
            title={item.name}
            subTitle={item.category}
            containerStyle={styles.listItemContainer}
            icon={
              <Image
                source={item.image}
                style={styles.image}
              />
            }
          >
            <Text style={styles.amountText}>{item.amount}</Text>
          </ListItem>
        </YGroup.Item>
      ))}
    </YGroup>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 10,
    fontWeight: "500",
    marginBottom: 5,
    color: "#424242",
    letterSpacing: 1.5
  },
  totalAmountText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#424242",
    letterSpacing: 1.5
  },
  amountText: {
    fontSize: 14,
    fontWeight: "400",
    position: "absolute",
    right: 10,
    marginTop: 10,
    color: "#E53935"
  },
  image: {
    width: 40,
    height: 40
  }
});
