import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default function PracticeExercise() {
  const { params } = useRoute();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{params.id}</Text>
    </View>
  );
}
