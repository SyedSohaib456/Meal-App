import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items, navigation }) {
  const renderedItem = (itemData) => {
    const mealData = () => {
      navigation.navigate("Specific Meal", {
        mealid: itemData.item.id,
        mealImage: itemData.item.imageUrl,
      });
    };

    const mealProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };

    return <MealItem {...mealProps} whenPressed={mealData} />;
  };

  return (
    <View style={styles.ctn}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderedItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
});

export default MealsList;
