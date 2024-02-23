import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "../../components/page/Header";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";
import { settings } from "../../setting/setting";

export default function StatsStudent() {
  const route = useRoute();
  const { params } = route;

  // const { account } = useAccount();
  const account = {
    name: "1",
    email: "1",
    image: "https://cdn-icons-png.flaticon.com/256/6028/6028690.png",
    role: "!23",
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header title={"Thông tin học sinh"} />
      <View style={styles.settingSection}>
        <View style={styles.profileImage}>
          <Image
            style={{
              width: 75,
              height: 75,
              borderRadius: "50%",
              margin: "auto",
            }}
            source={{
              uri: account.image,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 700,
            marginTop: 12,
            marginBottom: 4,
          }}
        >
          Nguyễn Văn A
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 400, color: "#9a9a9e" }}>
          {account.role}
        </Text>
        <View style={styles.mainSetting}>
          <View style={styles.setting}></View>
        </View>
      </View>
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
        {/* <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
        <VictoryAxis y={(data) => `${data.y}%`} /> */}
      </VictoryChart>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar
          style={{ data: { fill: "#c43a31" } }}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  profileImage: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: settings.color.lightGray,
    border: `3px solid ${settings.color.primary}`,
  },

  settingSection: {
    marginBottom: "28px",
    paddingVertical: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainSetting: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    // boxShadow:
    //   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  setting: {
    height: 40,
    // width: "100%",
    // height: 20,
    // display: "flex",
    // flexDirection: "row",
    // gap: 20
  },
});
