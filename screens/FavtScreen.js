import { View, Text, StyleSheet } from "react-native";
import { useSelector} from "react-redux";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favourite-context";
import MealsList from "../components/MealsList/MealsList";

function FavtScreen({navigation}) {
  
  // const favtMealsCtx = useContext(FavoritesContext);
  // const favtMeals = MEALS.filter((meal) => favtMealsCtx.ids.includes(meal.id));


  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} navigation={navigation} />;
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
