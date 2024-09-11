import { View, Text, StyleSheet } from "react-native";
function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.wall} >|</Text>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.wall}>|</Text>
      <Text style={styles.detailItem}>{complexity}</Text>
      <Text style={styles.wall}>|</Text>
      <Text style={styles.detailItem}>{affordability}</Text>
      <Text style={styles.wall}>|</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  wall: {
    color: "orange",
    fontWeight: "bold",
    fontSize:20,
    paddingHorizontal:2
  },
});

export default MealDetails;
