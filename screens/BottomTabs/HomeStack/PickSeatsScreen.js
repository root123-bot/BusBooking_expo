import React, { memo } from "react";
import { Text, View, StyleSheet } from "react-native";

function PickSeatsScreen({ route, navigation }) {
  //   const { metadata } = route.params;

  return (
    <View style={styles.container}>
      <Text>Just pick the seats u want</Text>
    </View>
  );
}

export default memo(PickSeatsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
