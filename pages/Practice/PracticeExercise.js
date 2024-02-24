import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import { Header } from "../../components/page/Header";
import { settings } from "../../setting/setting";
import { InfoPill } from "../../components/ui/InfoPill";
import { Ionicons } from "@expo/vector-icons";
import { Iframe } from "@bounceapp/iframe";

import { Switch } from "react-native-paper";
import { useAccount } from "../../components/hooks/useAccount";
import InExercise from "../../components/page/InExercise";

export default function PracticeExercise() {
  const { inExercise, setInExercise } = useAccount();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id, bookmarked } = params;

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
      <InExercise inner={true} />
      <Header title="Chi tiết bài tập" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
          marginBottom: 25,
          paddingHorizontal: 10,
        }}
      >
        <Iframe
          uri="https://www.youtube.com/embed/ET8rdp2b1a4"
          style={{
            width: "100%",
            height: "200px",
          }}
        />
      </View>

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
            Hít đất hay còn được gọi là chống đẩy, nó có tên tiếng Anh là Push
            Up và đây là một bài tập thể dục thể hình rất cơ bản, được nhiều
            người áp dụng tập luyện. Theo các HLV thể hình, hít đất là một bài
            tập dạng Compound, tác động lên nhóm cơ chính là ngực và các nhóm cơ
            phụ gồm cơ vai, cơ tay sau, cơ tay trước. Luyện tập hít đất đúng
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            Chức năng
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#C4C4C4",
            }}
          >
            Hít đất hay còn được gọi là chống đẩy, nó có tên tiếng Anh là Push
            Up và đây là một bài tập thể dục thể hình rất cơ bản, được nhiều
            người áp dụng tập luyện. Theo các HLV thể hình, hít đất là một bài
            tập dạng Compound, tác động lên nhóm cơ chính là ngực và các nhóm cơ
            phụ gồm cơ vai, cơ tay sau, cơ tay trước. Luyện tập hít đất đúng
            cách và thường xuyên không chỉ giúp rèn luyện sức khỏe mà nó còn
            giúp các nhóm cơ phát triển to, vạm vỡ hơn và săn chắc tự nhiên. Tập
            hít đất sẽ giúp nam giới sớm sở hữu cho mình bộ ngực có kích thước
            to rộng, săn chắc và giúp nữ giới tăng kích thước vòng 1 của mình
            lên nhanh chóng. Thực tế, khi áp dụng bài tập này thì bạn có thể tập
            tay không hoặc sử dụng dụng cụ hít đất và nó phù hợp áp dụng cho mọi
            đối tượng, từ nam đến nữ, từ người trẻ đến người già,...
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
            border: "1px solid #C8C8C8",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            gap: 12,
          }}
        >
          <Ionicons
            name="alarm-outline"
            size={45}
            color={settings.color.primary}
          />
          <View style={styles.sectionInfo}>
            <Text style={styles.sectionTitle}>Set alarm</Text>
            <Text style={styles.sectionDes}>10AM</Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            style={{ width: 35, height: 18 }}
          />
        </View>
      </ScrollView>
      <Pressable
        style={[
          {
            backgroundColor: settings.color.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
            borderRadius: 15,
            paddingHorizontal: 22,
            paddingVertical: 15,
            marginVertical: 15,
            marginHorizontal: 10,
          },
          {
            backgroundColor:
              inExercise && inExercise.id !== id
                ? "#C8C8C8"
                : settings.color.primary,
            pointerEvents: inExercise && inExercise.id !== id ? "none" : "auto",
          },
        ]}
        onPress={() => {
          if (inExercise) setInExercise(null);
          else
            setInExercise({
              id: id,
              name: "Hít đất",
              startTime: new Date(),
            });
        }}
      >
        <Ionicons
          name={
            inExercise
              ? inExercise.id === id
                ? "stop-circle-outline"
                : "alert-circle-outline"
              : "stopwatch-outline"
          }
          size={23}
          color="white"
        />
        <Text style={styles.btnText}>
          {inExercise
            ? inExercise.id === id
              ? "Dừng tính giờ"
              : `Hãy dừng thời gian bài tập ${inExercise.name}`
            : "Bắt đầu tính giờ"}
        </Text>
      </Pressable>

      {/* <Text>{params.id}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sectionInfo: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  sectionDes: {
    fontSize: 13,
    color: "#192126",
    opacity: "0.5",
  },
  btnText: {
    fontSize: 18.5,
    fontWeight: "600",
    color: "white",
  },
});
