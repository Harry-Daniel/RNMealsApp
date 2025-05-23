import { Button, StyleSheet, Text } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle:{ backgroundColor: "#351401" },
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#e4baa1'
      }}
    >
      <Drawer.Screen name="Categories" component={Categories} options={{
        drawerIcon: ({color,size})=> <Ionicons name="list" color={color} size={size}/>
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({color,size})=> <Ionicons name="star" color={color} size={size}/>
      }}  />
    </Drawer.Navigator>
  );
}

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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverview} />
          <Stack.Screen name="Meals Detail" component={MealDetail} options={
            {
              title:'About the Meal'
            }
          } />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
