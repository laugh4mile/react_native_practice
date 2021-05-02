import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.innerView}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInputStyle}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  innerView: {
    flexDirection: "row",
    padding: 30,
  },
});

export default GoalInput;
