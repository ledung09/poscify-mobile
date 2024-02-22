import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/page/Header";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory-native";
import { settings } from "../../setting/setting";

export default function StatsStudent() {
  const route = useRoute();
  const { params } = route;

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header title={"Thông tin học sinh"} />
      <VictoryChart minDomain={{ y: 0 }} maxDomain={{ y: 100 }}>
        <VictoryLine
          interpolation="natural"
          style={{
            data: {
              stroke: settings.color.primary,
              strokeWidth: 5,
              strokeLinecap: "round",
            },
          }}
          x={(datum) => datum.xLabel}
          data={[
            { x: 1, y: 15, xLabel: "Thứ hai" },
            { x: 2, y: 30, xLabel: "Thứ ba" },
            { x: 3, y: 60, xLabel: "Thứ tư" },
            { x: 4, y: 40, xLabel: "Thứ năm" },
            { x: 5, y: 80, xLabel: "Thứ sáu" },
          ]}
        />
      </VictoryChart>
      <Text>{params.id}</Text>
    </View>
  );
}
