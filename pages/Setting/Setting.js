import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { settings } from "../../setting/setting";
import { Header } from "../../components/page/Header";

export default function Setting() {
  return (
    <View style={styles.container}>
      <TopSection />
    </View>
  );
}

function TopSection() {
  return (
    <View style={{}}>
      <Header title={"Cài đặt"} goBackShown={false} />
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
              uri: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
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
          Đinh Lê Dũng
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 400, color: "#9a9a9e" }}>
          Phụ huynh
        </Text>
        <View style={styles.mainSetting}>
          <View style={styles.setting}></View>
        </View>
      </View>
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
