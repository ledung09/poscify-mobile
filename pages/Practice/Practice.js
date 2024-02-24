import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/page/Header";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { settings } from "../../setting/setting";
import InExercise from "../../components/page/InExercise";
import { useAccount } from "../../components/hooks/useAccount";

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
      <InExercise inner={true} />
      <Header title="Bài tập" goBackShown={false} style={{ marginBottom: 5 }} />
      <FlatList
        keyExtractor={(item, idx) => item.id}
        data={data}
        renderItem={({ item, index }) => {
          return <ExerciseItem item={item} />;
        }}
      />
    </View>
  );
}

function ExerciseItem({ item }) {
  const { inExercise } = useAccount();
  const { navigate } = useNavigation();
  const [bookmarked, setBookmarked] = React.useState(false);

  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        marginBottom: "15px",
        alignItems: "center",
        marginHorizontal: 15,
        padding: 15,
        border:
          inExercise && inExercise.id === item.id
            ? `3px solid ${settings.color.primary}`
            : "1px solid #C2C2C2",
        borderRadius: 20,
        backgroundColor:
          inExercise && inExercise.id === item.id
            ? settings.color.secondary
            : "white",
      }}
      onPress={() => {
        {
          navigate("Exercise", { id: item.id, bookmarked });
        }
      }}
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
      </View>
      <Pressable
        onPress={() => {
          setBookmarked((prev) => !prev);
        }}
        style={{
          width: 30,
          height: 30,
          border: "1px solid #C8C8C8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginBottom: "auto",
        }}
      >
        {!bookmarked ? (
          <Ionicons name="bookmark-outline" size={16} />
        ) : (
          <Ionicons
            name="bookmark"
            size={16}
            style={{ color: settings.color.primary }}
          />
        )}
      </Pressable>
    </Pressable>
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
    width: "95px",
    height: "75px",
    borderRadius: "15px",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginBottom: "15px",
    alignItems: "center",
    marginHorizontal: 15,
    padding: 15,
    border: "1px solid #C2C2C2",
    borderRadius: 20,
  },
  sectionInfo: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  sectionTitle: {
    fontSize: 18.5,
    fontWeight: "700",
  },
  sectionDes: {
    fontSize: "15px",
    color: "#192126",
    opacity: "0.5",
  },
});
