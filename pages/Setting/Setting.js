import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { settings } from "../../setting/setting";

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
      <View style={styles.settingSection}>
        <View style={styles.profileImage}></View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 500,
            marginTop: 15,
            marginBottom: 2,
          }}
        >
          Đinh Lê Dũng
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 400 }}>Phụ huynh</Text>
        <View style={styles.mainSetting}>
          <View style={styles.setting}>
            
          </View>
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
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: settings.color.lightGray,
  },

  settingSection: {
    marginBottom: "28px",
    paddingVertical: "20px",
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
