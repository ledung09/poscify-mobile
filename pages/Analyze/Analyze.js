import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import PercentCircle from "../../components/ui/PercentCircle";

export default function Analyze() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Dáng ngồi con bạn có kết quả như sau
      </Text>
      <Image
        source={{
          uri: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2020/07/13/hunch-fs-preds.jpg",
        }}
        style={{ width: "75%", height: "240px", objectFit: "contain" }}
      />

      <View style={styles.chartSection}>
        <PercentCircle percent={70} underText="Tỉ lệ cong lưng" />
        <PercentCircle percent={76} underText="Tỉ lệ cong cột sống" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    paddingHorizontal: "20px",
    paddingVertical: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: "17px",
  },

  chartSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
