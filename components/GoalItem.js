import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 11,
    marginVertical: 3,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
