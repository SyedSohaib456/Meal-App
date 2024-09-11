import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite,removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favourite-context";
function MealScreen({ route, navigation }) {
  const mealId = route.params.mealid;
  let selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favtMealCtx = useContext(FavoritesContext);
  const favoriteMealIds=useSelector((state)=> state.favoriteMeals.ids)
  const dispatch=useDispatch()


  // const MealIsFavt = favtMealCtx.ids.includes(mealId);
  const MealIsFavt=favoriteMealIds.includes(mealId)

  function changeFavtStatusHandler() {
    if (MealIsFavt) {
      // favtMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}))
    } else {
      // favtMealCtx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            whenPressed={changeFavtStatusHandler}
            icon={MealIsFavt ? "star" : "star-outline"}
            color={"white"}
          />
        );
      },
    });
  }, [navigation, MealIsFavt]);

  return (
    <View style={styles.cnt}>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            affordability={selectedMeal.affordability}
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
          />
        </View>
        <View style={{ gap: 15, marginTop: 10 }}>
          <View>
            <View style={styles.subTitleCtn}>
              <Text style={styles.subTitle}>Ingredients:</Text>
            </View>
            {selectedMeal.ingredients.map((ingredient, index) => (
              <View style={styles.mapCtn} key={index}>
                <Text style={styles.ingList}>
                  <Text style={{ color: "white" }}>{index + 1}) </Text>
                  {ingredient}
                </Text>
              </View>
            ))}
          </View>
          <View>
            <Text style={styles.subTitle}>Steps:</Text>
            {selectedMeal.steps.map((steps, index) => (
              <View style={styles.mapCtn} key={index}>
                <Text style={styles.ingList}>
                  <Text style={{ color: "white" }}>{index + 1}) </Text>
                  {steps}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cnt: {
    padding: 10,
    paddingBottom: 40,
    backgroundColor: "black",
    flex: 1,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 8,
    shadowColor: "orange",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
  },
  image: {
    height: 300,
    width: "100%",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "orange",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  ingList: {
    fontSize: 18,
    color: "white",
    paddingVertical: 5,
  },
  subTitleCtn: {
    marginVertical: 6,
  },
  mapCtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "orange",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 4,
    margin: 4,
  },
});

export default MealScreen;
