import { FlatList, View} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesSCREEN({ navigation }) {

  function renderCategoryItem(itemData) {

    function whenPressedhandler() {
      navigation.navigate("Meals OverView", {
        categoryid: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        whenPressed={whenPressedhandler}
      />
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={"2"}
      style={{backgroundColor:'black'}}

      
    />
  );
}

export default CategoriesSCREEN;
