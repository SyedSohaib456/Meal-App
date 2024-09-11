import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  whenPressed,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={whenPressed}
      >
        <View style={styles.innerCtn}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
              <Text style={styles.wall}>|</Text>
              <Text style={styles.detailItem}>{duration}m</Text>
              <Text style={styles.wall}>|</Text>
              <Text style={styles.detailItem}>{complexity}</Text>
              <Text style={styles.wall}>|</Text>
              <Text style={styles.detailItem}>{affordability}</Text>
              <Text style={styles.wall}>|</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "orange",
    shadowOpacity: 0.25,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "orange",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
  innerCtn: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.6 : 0.9,
  },
  wall: {
    color: "orange",
    fontWeight: "bold",
    fontSize:20,
    paddingHorizontal:2
  },
});
export default MealItem;
