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
  const { percent } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.pieText}>{percent}%</Text>
        <VictoryPie
          cornerRadius={({ datum }) => datum.rounded}
          colorScale={["#F5F5F5", settings.color.primary]}
          radius={140}
          innerRadius={105}
          data={[
            { x: 1, y: 100 - percent, rounded: 0 },
            { x: 2, y: percent, rounded: 30 },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "140px",
    width: "140px",
  },
  pieText: {
    position: "absolute",
    fontSize: 22,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontWeight: "800",
  },
});
