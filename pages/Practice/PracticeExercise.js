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
  FlatList,
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
          uri="http://www.youtube.com/embed/RHobTtOv1Qo?si=5Iob9xaehekEJoPV&amp;start=9&autoplay=1&mute=1"
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
            <Text style={{ fontSize: 23, fontWeight: 700 }}>Chạy bộ</Text>

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
            Bài tập cho trẻ tư 6 - 15 tuổi.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            marginTop: 18,
            marginBottom: 25,
          }}
        >
          <InfoPill iconName={"hourglass-outline"} text={"9 phút"} />
          <InfoPill iconName={"podium-outline"} text={"Dễ"} />
          <InfoPill
            iconName={"reload-circle-outline"}
            text={"2 - 3 lần/ngày"}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Giới thiệu
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#A0A0A0",
              textAlign: "justify",
            }}
          >
            Chạy bộ là một trong những bài tập đơn giản, hiệu quả và dễ tiếp cận
            nhất hiện nay. Không cần dụng cụ đắt tiền, không cần đến phòng tập,
            chỉ với đôi giày phù hợp, bạn đã có thể bắt đầu hành trình rèn luyện
            sức khỏe và khám phá bản thân.
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 19,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Lợi ích
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#A0A0A0",
              textAlign: "justify",
              marginBottom: 10,
            }}
          >
            Chạy bộ mang đến vô số lợi ích cho sức khỏe thể chất và tinh thần,
            bao gồm:
          </Text>
          <FlatList
            data={[
              {
                key: "Tăng cường sức khỏe tim mạch, giảm nguy cơ mắc các bệnh tim mạch, đột quỵ.",
              },
              {
                key: "Cải thiện sức khỏe hệ hô hấp, tăng cường dung tích phổi.",
              },
              { key: "Giúp xương khớp chắc khỏe, giảm nguy cơ loãng xương." },
              {
                key: "Tăng cường sức mạnh cơ bắp, đặc biệt là cơ bắp phần thân dưới.",
              },
            ]}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 5 }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: "#A0A0A0",
                    textAlign: "justify",
                  }}
                >
                  &#10146; {item.key}
                </Text>
              </View>
            )}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 19,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Lưu ý khi thực hiện bài tập
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#A0A0A0",
              textAlign: "justify",
              marginBottom: 10,
            }}
          >
            Chạy bộ là một bài tập đơn giản, tuy nhiên để đạt được hiệu quả
            và tránh các chấn thương không mong muốn, người tập cần tuân theo
            những lưu ý sau:
          </Text>
          <FlatList
            data={[
              {
                key: "Nên khởi động kỹ trước khi chạy bộ để tránh chấn thương.",
              },
              {
                key: "Chọn giày chạy phù hợp để bảo vệ đôi chân và hỗ trợ vận động hiệu quả.",
              },
              { key: "Uống đủ nước trước, trong và sau khi chạy bộ." },
              { key: "Lắng nghe cơ thể, không nên tập luyện quá sức." },
            ]}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 5 }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: "#A0A0A0",
                    textAlign: "justify",
                  }}
                >
                  &#10146; {item.key}
                </Text>
              </View>
            )}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            border: "1px solid #C8C8C8",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            gap: 18,
          }}
        >
          <Ionicons
            name="alarm-outline"
            size={45}
            color={settings.color.primary}
          />
          <View style={styles.sectionInfo}>
            <Text style={styles.sectionTitle}>Đặt thông báo</Text>
            <Text style={styles.sectionDes}>10 AM</Text>
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
              name: "Chạy bộ",
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
