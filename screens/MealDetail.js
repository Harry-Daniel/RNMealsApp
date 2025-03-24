import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text>MealsDetail-{catId}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({});
