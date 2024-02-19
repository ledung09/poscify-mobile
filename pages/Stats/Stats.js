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
import { seatDataMapping } from "../../util/util";
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: 0, status: "high" },
  { id: 1, status: "low" },
  { id: 2, status: "medium" },
  { id: 3, status: "high" },
  { id: 4, status: "medium" },
  { id: 5, status: "low" },
  { id: 6, status: "high" },
  { id: 7, status: "low" },
  { id: 8, status: "medium" },
  { id: 9, status: "high" },
  { id: 10, status: "low" },
  { id: 11, status: "low" },
  { id: 12, status: "medium" },
  { id: 13, status: "high" },
  { id: 14, status: "medium" },
  { id: 15, status: "low" },
  { id: 16, status: "high" },
  { id: 17, status: "low" },
  { id: 18, status: "medium" },
  { id: 19, status: "high" },
  { id: 20, status: "low" },
  { id: 21, status: "low" },
  { id: 22, status: "medium" },
  { id: 23, status: "high" },
  { id: 24, status: "medium" },
  { id: 25, status: "low" },
  { id: 26, status: "high" },
  { id: 27, status: "low" },
  { id: 28, status: "medium" },
  { id: 29, status: "high" },
  { id: 30, status: "low" },
  { id: 31, status: "high" },
  { id: 32, status: "medium" },
];

export default function Stats() {
  const [screenAngle, setScreenAngle] = React.useState(
    screen.orientation.angle
  );

  React.useEffect(() => {
    screen.orientation.addEventListener("change", (e) => {
      setScreenAngle(e.target.angle);
    });
  }, []);

  const { navigate } = useNavigation();

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
            <Text style={styles.rotateText}>Vui lòng xoay điện thoại!</Text>
          </View>
        </>
      )}

      {screenAngle === 90 && (
        <View style={styles.diagramWrapper}>
          {seatDataMapping(data) &&
            seatDataMapping(data).map((row, idx1) => {
              return (
                <View style={styles.diagramRow} key={idx1}>
                  <View style={styles.rowItem}>
                    <Text style={styles.rowText}>
                      {String.fromCharCode(idx1 + 65)}
                    </Text>
                  </View>

                  {row &&
                    row.map((pair, idx2) => {
                      return (
                        <View style={styles.subRow} key={idx2}>
                          {pair &&
                            pair.map((item, idx3) => {
                              return (
                                <TouchableOpacity
                                  onPress={() => {
                                    navigate("Student Statistic", {
                                      id: item.id,
                                    });
                                  }}
                                  key={idx3}
                                  style={[
                                    styles.seatItem,
                                    {
                                      backgroundColor:
                                        item.status === "low"
                                          ? settings.color.classDiagram.low
                                          : item.status === "medium"
                                          ? settings.color.classDiagram.medium
                                          : settings.color.classDiagram.high,
                                    },
                                  ]}
                                >
                                  <Text style={styles.seatText}>
                                    {(item.id + 1) % 8 === 0
                                      ? 8
                                      : (item.id + 1) % 8}
                                  </Text>
                                </TouchableOpacity>
                              );
                            })}
                        </View>
                      );
                    })}
                </View>
              );
            })}
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
    borderRadius: "8px",
    width: "34px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rowText: {
    fontSize: "22px",
    fontWeight: 500,
    fontFamily: "sans-serif",
    color: "white",
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
    borderRadius: "8px",
    backgroundColor: settings.color.classDiagram.low,
    fontFamily: "sans-serif",
  },
  seatText: {
    fontSize: "24px",
    fontWeight: 500,
    color: "white",
    fontFamily: "sans-serif",
  },
});
