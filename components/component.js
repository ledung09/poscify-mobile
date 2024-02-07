import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { settings } from "../settings";

export function ProgressBar({ value }) {
  return (
    <View style={styles.barOutter}>
      <View style={[styles.barInner, { width: `${value}%` }]}>
        <Text style={styles.barText}>{value}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barOutter: {
    backgroundColor: settings.color.lightGray,
    height: "14px",
    width: "100%",
    borderRadius: "5px",
  },
  barInner: {
    backgroundColor: settings.color.primary,
    height: "14px",
    borderRadius: "5px",
  },
  barText: {
    fontSize: "10px",
    marginVertical: "auto",
    marginHorizontal: "auto",
    fontWeight: "700",
  },
});
