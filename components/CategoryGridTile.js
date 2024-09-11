import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, whenPressed }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={whenPressed}
      >
        <View style={[styles.innerCtn,{ backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    border: 7,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "orange",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    padding: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerCtn: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color:'white',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default CategoryGridTile;
