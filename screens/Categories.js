import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummydata";

import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";

function Categories({ navigation }) {
  function pressHandler() {
    navigation.navigate("Meals Overview");
  }

  function renderCategoryItem({ item }) {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default Categories;
