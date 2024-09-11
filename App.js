import { StatusBar } from "react-native";
import CategoriesSCREEN from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavtScreen from "./screens/FavtScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/context/favourite-context";
import {Provider} from 'react-redux'
import { store } from "./store/redux/store";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F58700" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#f5a442" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#824F10",
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        component={CategoriesSCREEN}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavtScreen}
        options={{
          title: "Your Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <FavoritesContextProvider> */}
       <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#f58700" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals OverView"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="Specific Meal"
              options={{ title: "Recipe" }}
              component={MealScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
