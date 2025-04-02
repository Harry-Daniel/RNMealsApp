import { Button, StyleSheet, Text } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={Categories}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverview} />
          <Stack.Screen name="Meals Detail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
