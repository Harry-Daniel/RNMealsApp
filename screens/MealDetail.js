import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummydata";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetail = ({ route,navigation }) => {
  const mealId = route.params.categoryId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler(){
    console.log("Pressed!");
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <Button title="Tap me" onPress={headerButtonPressHandler}/>
      }
    })
  },[navigation,headerButtonPressHandler])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer:{
    width:'80%',
    margin:'auto'
  },
});
