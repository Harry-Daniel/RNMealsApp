import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummydata";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem({item}){
    return <MealItem title={item.title}/>
  }


  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
