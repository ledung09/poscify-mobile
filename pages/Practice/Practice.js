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
    image: "https://illustoon.com/photo/2045.png",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "easy",
    time: 10,
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/cartoon-character-sticker-with-girl-jogging-white-background_1308-79976.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1701388800&semt=ais",
    title: "Chạy bộ",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "easy",
    time: 12,
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/previews/005/103/441/non_2x/mom-and-son-do-yoga-doing-the-dog-face-down-pose-vector.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "hard",
    time: 8,
  },
  {
    id: 3,
    image:
      "https://prod-media.coolaustralia.org/wp-content/uploads/2022/02/03160408/Active-Kid-1.png",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "medium",
    time: 10,
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/vectors/smiling-girl-practicing-yoga-and-doing-king-cobra-pose-on-training-vector-id1026132986?k=6&m=1026132986&s=170667a&w=0&h=T5lNY_myPndZsJk7d-Z5xTb1Qkz9pNiwImi6PX1r0N0=",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "hard",
    time: 11,
  },
  {
    id: 5,
    image:
      "https://th.bing.com/th/id/OIP.qTb8CBWn-EuxDdsIkA0q8wHaF_?w=826&h=669&rs=1&pid=ImgDetMain",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "medium",
    time: 9,
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-girl-yoga-pose_97632-2863.jpg?w=900",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "hard",
    time: 7,
  },
  {
    id: 7,
    image:
      "https://thumbs.dreamstime.com/b/happy-cute-little-kid-boy-girl-do-yoga-pose-188143153.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "medium",
    time: 12,
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/premium-vector/kid-morning-workout-healthy-happy-boy-exercise-isolated-white-background_533410-1001.jpg",
    title: "Push up",
    des: "100 Push up a day",
    percent: 45,
    difficulty: "easy",
    time: 9,
  },
];

const diffList = [
  { id: 0, en: "easy", vi: "Dễ" },
  { id: 1, en: "medium", vi: "Trung bình" },
  { id: 2, en: "hard", vi: "Khó" },
];

export default function Practice() {
  const [diff, setDiff] = React.useState("easy");

  return (
    <View style={styles.container}>
      <InExercise inner={true} />
      <Header title="Bài tập" goBackShown={false} style={{ marginBottom: 5 }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          marginBottom: 20,
        }}
      >
        {diffList.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => setDiff(item.en)}
              style={{
                paddingVertical: 6,
                paddingHorizontal: 36,
                border: "1px solid #c8c8c8",
                borderRadius: 10,
                backgroundColor:
                  diff === item.en ? settings.color.primary : "white",
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  color: diff === item.en ? "white" : "black",
                }}
              >
                {item.vi}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <FlatList
        keyExtractor={(item, idx) => item.id}
        data={data}
        renderItem={({ item, index }) => {
          if (item.difficulty === diff) return <ExerciseItem item={item} />;
          else return <></>;
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
        <Text style={styles.sectionDes}>
          {item.time} phút |{" "}
          {item.difficulty === "easy"
            ? "Dễ"
            : item.difficulty === "medium"
            ? "Trung bình"
            : "Khó"}
        </Text>
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
    height: "80px",
    borderRadius: "15px",
    objectFit: "cover",
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
