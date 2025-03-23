import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverview from "./screens/MealsOverview";

const Stack= createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals Categories" component={Categories}/>
          <Stack.Screen name="Meals Overview" component={MealsOverview}/>
          
        </Stack.Navigator>
      
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
