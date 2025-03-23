import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummydata";

const MealsOverview = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview</Text>
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
