import React from "react";

import { ScreenContainer } from "@components/screen-container";
import { Text } from "react-native";

export function AddExpense() {
  return (
    <ScreenContainer testID="screens.add-expense.screen-container">
      <Text>Add Expense Screen</Text>
    </ScreenContainer>
  );
}
