import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { settings } from "../../setting/setting";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryPie,
} from "victory-native";

export default function PercentCircle(props) {
  const { percent, underText } = props;
  return (
    <View style={styles.container}>
      <View style={styles.barOutter}>
        <Text style={styles.pieText}>{percent}%</Text>
        <VictoryPie
          colorScale={["#D9D9D9", settings.color.primary]}
          radius={135}
          innerRadius={120}
          data={[
            { x: 1, y: 100 - percent },
            { x: 2, y: percent },
          ]}
        />
      </View>
      <Text style={styles.underPieText}>{underText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "130px",
    width: "130px",
    marginBottom: "48px",
  },
  barOutter: {
    position: "relative",
  },
  pieText: {
    position: "absolute",
    fontSize: "24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: settings.color.primary,
    fontWeight: "700",
  },
  underPieText: {
    fontSize: "18px",
    textAlign: "center",
    color: settings.color.primary,
    fontWeight: "500",
  },
});
