import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { FlatList } from "react-native-gesture-handler";

const data = [
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
];

export default function Practice({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Practice section</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.section}
              onPress={() => navigation.navigate("Exercise")}
            >
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
              <View style={styles.sectionInfo}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <Text style={styles.sectionDes}>{item.des}</Text>
                <ProgressBar value={item.percent} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "20px",
    paddingVertical: "15px",
    backgroundColor: "white",
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
    // marginBottom: "20px",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "15px",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginTop: "25px",
  },
  sectionInfo: {
    flex: "1",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "4px",
  },
  sectionDes: {
    fontSize: "16px",
    color: "#192126",
    opacity: "0.5",
    marginBottom: "12px",
  },
});
