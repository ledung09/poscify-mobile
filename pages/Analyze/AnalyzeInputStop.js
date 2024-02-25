import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { settings } from "../../setting/setting";
import { Button } from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/page/Header";
import InExercise from "../../components/page/InExercise";
import React from "react";

export default function AnalyzeInputStop() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <InExercise />
      <Header title="Phân tích dáng ngồi" goBackShown={false} />
      <View style={styles.wrapper}>
        <View style={{ marginTop: 450 }}>
          <Button
            onPress={async () => {
              navigate("AnalyzeResult", {});
            }}
            iconName="color-wand-outline"
            text="Xử lí video"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  wrapper: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 18,
  },
  description: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    maxWidth: "85%",
    lineHeight: "1.3",
    marginBottom: "50px",
  },
});
