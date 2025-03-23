import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummydata";

const MealsOverview = ({route}) => {
  const catId=route.params.categoryId
  return (
    <View style={styles.container}>
      <Text>MealsOverview- {catId}</Text>
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
