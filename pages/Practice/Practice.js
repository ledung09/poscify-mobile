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
import { PlayButton } from "../../components/ui/PlayButton";

const data = [
  {
    id: 0,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    id: 1,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    id: 2,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    id: 3,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    id: 4,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    id: 5,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
  {
    id: 6,
    image: "https://cdn.mos.cms.futurecdn.net/9ghCpUY6JaLtStkZkeH73T.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
  },
];

export default function Practice({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Practice section</Text>

      <FlatList
        // contentContainerStyle={{
        //   flexGrow: 1,
        // }}
        // ListHeaderComponent={
        //   <Text style={styles.pageTitle}>Practice section</Text>
        // }
        // stickyHeaderIndices={[0]}
        keyExtractor={(item, idx) => item.id}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.section}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
              <View style={styles.sectionInfo}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <Text style={styles.sectionDes}>{item.des}</Text>
              </View>
              <PlayButton id={item.id} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "600",
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "white",
  },
  image: {
    width: "65px",
    height: "65px",
    borderRadius: "15px",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginBottom: "20px",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  sectionInfo: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 3,
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
  },
  sectionDes: {
    fontSize: "16px",
    color: "#192126",
    opacity: "0.5",
  },
});
