import React from "react";

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
import { settings } from "../../setting/setting";

export default function Stats() {
  const [screenAngle, setScreenAngle] = React.useState(
    screen.orientation.angle
  );

  React.useEffect(() => {
    screen.orientation.addEventListener("change", (e) => {
      setScreenAngle(e.target.angle);
    });
  }, []);

  return (
    <View style={styles.container}>
      {screenAngle === 0 && (
        <>
          <View style={styles.rotateWrapper}>
            <Image
              source={{
                uri: "https://cdn.dribbble.com/users/3570301/screenshots/6457895/rotate-your-screen-animation-_black_.gif",
              }}
              style={{
                width: "550px",
                height: "250px",
                objectFit: "contain",
              }}
            />
            <Text style={styles.rotateText}>Please rotate your phone!</Text>
          </View>
        </>
      )}

      {screenAngle === 90 && (
        <View style={styles.diagramWrapper}>
          <View style={styles.diagramRow}>
            <View style={styles.rowItem}>A</View>
            <View style={styles.subRow}>
              <View style={styles.seatItem}>1</View>
              <View style={styles.seatItem}>1</View>
            </View>

            <View style={styles.subRow}>
              <View style={styles.seatItem}>1</View>
              <View style={styles.seatItem}>1</View>
            </View>

            <View style={styles.subRow}>
              <View style={styles.seatItem}>1</View>
              <View style={styles.seatItem}>1</View>
            </View>

            <View style={styles.subRow}>
              <View style={styles.seatItem}>1</View>
              <View style={styles.seatItem}>1</View>
            </View>
          </View>
          <View>
            <View style={styles.rowItem}>A</View>
          </View>
          <View>
            <View style={styles.rowItem}>A</View>
          </View>
          <View>
            <View style={styles.rowItem}>A</View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    paddingVertical: "25px",
    paddingHorizontal: "30px",
  },
  diagramWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rotateWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  rotateText: {
    fontSize: "25px",
    fontWeight: 600,
  },
  diagramRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subRow: {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
  },
  rowItem: {
    backgroundColor: "rgb(190 203 222);",
    borderRadius: "5px",
    width: "34px",
    height: "60px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: 500,
    fontFamily: "sans-serif",
  },
  seatItem: {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: 500,
    color: "white",
    borderRadius: "5px",
    backgroundColor: settings.color.classDiagram.low,
    fontFamily: "sans-serif",
  },
});
