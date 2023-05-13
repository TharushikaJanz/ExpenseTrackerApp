import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, XStack, YStack } from "tamagui";

const Summary = () => {
  return (
    <View style={styles.container}>
      <XStack
        space="$10"
        alignItems="center"
        justifyContent="center"
      >
        <YStack style={styles.item}>
          <Image
            source={require("./../../../assets/expenses.png")}
            style={styles.expensesIcon}
          />
          <Text style={[styles.amountText, { color: "#E53935" }]}>
            - ₹ 12,000
          </Text>
          <Text style={styles.labelText}>Expenses</Text>
        </YStack>
        <YStack style={styles.item}>
          <Image
            source={require("./../../../assets/balance.png")}
            style={styles.balanceIcon}
          />
          <Text style={[styles.amountText, { color: "#00897B" }]}>
            ₹ 48,000
          </Text>
          <Text style={styles.labelText}>Balance</Text>
        </YStack>
        <YStack style={styles.item}>
          <Image
            source={require("./../../../assets/income.png")}
            style={styles.incomeIcon}
          />
          <Text style={styles.amountText}>₹ 70,000</Text>
          <Text style={styles.labelText}>Income</Text>
        </YStack>
      </XStack>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  item: {
    alignItems: "center"
  },
  expensesIcon: {
    width: 22,
    height: 16
  },
  balanceIcon: {
    width: 19,
    height: 18
  },
  incomeIcon: {
    width: 19,
    height: 20
  },
  amountText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "500"
  },
  labelText: {
    fontSize: 12,
    marginTop: 2,
    color: "#616161",
    fontWeight: "400"
  }
});
