import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummydata";

import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";

function Categories({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("Meals Overview", {
        categoryId: item.id,
      });
    }

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
