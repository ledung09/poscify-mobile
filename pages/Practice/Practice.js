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
import { exercises } from "../../data/exercise";

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
                borderWidth: diff === item.en ? 0 : 1,
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
        data={exercises}
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
    width: "100px",
    height: "85px",
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
