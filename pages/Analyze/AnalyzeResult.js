import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

import PercentCircle from "../../components/ui/PercentCircle";
import { Header } from "../../components/page/Header";
import { useNavigation } from "@react-navigation/native";

export default function AnalyzeResult() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          borderColor: "rgb(234 234 234)",
          height: 55,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 5,
          borderWidth: 0.5,
        },
      });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header title="Kết quả phân tích" />

      <Image
        source={{
          uri: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2020/07/13/hunch-fs-preds.jpg",
        }}
        style={{
          marginHorizontal: "auto",
          width: "80%",
          height: "270px",
          objectFit: "contain",
          marginVertical: 20,
        }}
      />

      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 19, fontWeight: 700, marginBottom: 18 }}>
          Kết quả phân tích
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.chartBox}>
            <Text style={styles.chartBoxTitle}>Cong lưng</Text>
            <PercentCircle percent={50} />
          </View>
          <View style={styles.chartBox}>
            <Text style={styles.chartBoxTitle}>Vị trí mắt</Text>
            <PercentCircle percent={60} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    paddingHorizontal: "20px",
    paddingVertical: "30px",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  wrapper: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: "17px",
  },

  chartSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  chartBox: {
    border: "1px solid #C8C8C8",
    borderRadius: 25,
    height: "fit-content",
    paddingHorizontal: 2,
    paddingTop: 20,
  },

  chartBoxTitle: {
    fontSize: 15,
    marginHorizontal: "auto",
    fontWeight: 700,
    marginBottom: 2,
  },
});
