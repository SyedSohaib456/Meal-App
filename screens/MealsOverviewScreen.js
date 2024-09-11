import { MEALS, CATEGORIES } from "../data/dummy-data";
import {useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryid;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id == catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

    return <MealsList items={displayedMeals} navigation={navigation} />
}

;

export default MealsOverviewScreen;
