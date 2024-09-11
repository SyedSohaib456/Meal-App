import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favourite-context";
import MealsList from "../components/MealsList/MealsList";

function FavtScreen() {
  const favtMealsCtx = useContext(FavoritesContext);
  const favtMeals = MEALS.filter((meal) => favtMealsCtx.ids.includes(meal.id));

  if (favtMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favtMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
  },
  message: {
    fontSize: 18,
    color: "orange",
    fontWeight: "bold",
  },
});

export default FavtScreen;
