import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default function StatsStudent() {
  const route = useRoute();
  const { params } = route;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{params.id}</Text>
    </View>
  );
}
