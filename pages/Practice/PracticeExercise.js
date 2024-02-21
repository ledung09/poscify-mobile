import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Header } from "../../components/page/Header";
import { settings } from "../../setting/setting";
import { InfoPill } from "../../components/ui/InfoPill";
import { Ionicons } from "@expo/vector-icons";

export default function PracticeExercise() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id, bookmarked } = params;

  React.useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          borderColor: "rgb(234 234 234)",
          height: 55,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 5,
          borderWidth: 0.5,
        },
      });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title="Chi tiết bài tập" />

      <Image
        source={{
          uri: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2020/07/13/hunch-fs-preds.jpg",
        }}
        style={{
          marginHorizontal: "auto",
          width: "80%",
          height: "270px",
          objectFit: "contain",
          marginVertical: 20,
        }}
      />
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap: 12,
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: 700 }}>
              Workout Exercise 1
            </Text>

            {!bookmarked ? (
              <Ionicons name="bookmark-outline" size={16} />
            ) : (
              <Ionicons
                name="bookmark"
                size={16}
                style={{ color: settings.color.primary }}
              />
            )}
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "#b4b4b4",
              fontWeight: 400,
            }}
          >
            Workout for 6 - 7
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            marginTop: 18,
            marginBottom: 25,
          }}
        >
          <InfoPill iconName={"hourglass-outline"} text={"15 phút"} />
          <InfoPill iconName={"heart-circle-outline"} text={"5 reps/ngày"} />
        </View>

        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            Mô tả
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#C4C4C4",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptas blanditiis tempora? Cupiditate, autem. Nam laudantium
            assumenda in aut dolorem reprehenderit hic soluta. Pariatur id
            voluptatem voluptatum dolores qui perspiciatis!
          </Text>
        </View>
      </ScrollView>

      <Text>{params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
