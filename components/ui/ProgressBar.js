import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { settings } from "../../setting/setting";

export function ProgressBar({ value, color }) {
  return (
    <View style={styles.barOutter}>
      <View
        style={[
          styles.barInner,
          {
            width: `${value}%`,
            backgroundColor:
              color === "high"
                ? settings.color.classDiagram.high
                : color === "medium"
                ? settings.color.classDiagram.medium
                : settings.color.classDiagram.low,
          },
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  barOutter: {
    flex: 1,
    backgroundColor: settings.color.lightGray,
    height: "8px",
    width: "100%",
    borderRadius: "5px",
  },
  barInner: {
    height: "8px",
    borderRadius: "5px",
  },
  barText: {
    fontSize: "10px",
    marginVertical: "auto",
    marginHorizontal: "auto",
    fontWeight: "700",
  },
});
