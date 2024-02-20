import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import PercentCircle from "../../components/ui/PercentCircle";

export default function AnalyzeResult() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>
          Dáng ngồi con bạn có kết quả như sau
        </Text>
        <Image
          source={{
            uri: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2020/07/13/hunch-fs-preds.jpg",
          }}
          style={{
            width: "75%",
            height: "240px",
            objectFit: "contain",
            marginVertical: "20px",
          }}
        />

        <View style={styles.chartSection}>
          <PercentCircle percent={70} underText="Tỉ lệ cong lưng" />
          <PercentCircle percent={76} underText="Tỉ lệ cong cột sống" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    paddingHorizontal: "20px",
    paddingVertical: "30px",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  wrapper: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
