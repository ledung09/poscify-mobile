import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/page/Header";

export default function StatsStudent() {
  const route = useRoute();
  const { params } = route;

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header title={"Thông tin học sinh"} />
      <Text>{params.id}</Text>
    </View>
  );
}
