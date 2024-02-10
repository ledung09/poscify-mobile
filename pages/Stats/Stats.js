import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
} from "victory-native";

export default function Stats() {
  return (
    <ScrollView style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
      </VictoryChart>
      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20 }}>
        <VictoryBar
          // barWidth={({ index }) => index * 2 + 8}
          style={{
            data: { fill: "#c43a31" },
          }}
          data={[
            { x: 1, y: 2, y0: 0 },
            { x: 2, y: 3, y0: 0 },
            { x: 3, y: 5, y0: 0 },
            { x: 4, y: 4, y0: 0 },
            { x: 5, y: 6, y0: 0 },
          ]}
        />
      </VictoryChart>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
  },
});
