import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";
import { settings } from "../../setting/setting";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { useAccount } from "../../components/hooks/useAccount";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
} from "victory-native";
import InExercise from "../../components/page/InExercise";
import { Icon } from "react-native-paper";

const pageComponents = [
  // {
  //   id: 0,
  //   component: SeatPostureAnalyze,
  // },
  {
    id: 1,
    component: ChildInfo,
  },
  {
    id: 2,
    component: ActivitySuggestion,
  },
  {
    id: 3,
    component: TeacherStats,
  },
];

export default function Home() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <InExercise />
      <ProfileSecion />
      <FlatList
        data={pageComponents}
        renderItem={({ item }) => {
          return <item.component />;
        }}
        keyExtractor={(item, idx) => item.id}
      />
    </View>
  );
}

function ProfileSecion() {
  const { account, setAccount } = useAccount();

  return (
    <View style={{}}>
      <View style={styles.profileSection}>
        <View style={styles.userInfo}>
          <View
            style={{
              width: 68,
              height: 68,
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: account.image,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileTextSection}>
            <Text style={styles.profileText}>Xin chào {account.name},</Text>
            <Text style={[styles.profileText, { fontSize: 18 }]}>
              đã đến với Poscify!
            </Text>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            // onChangeText={onChangeText}
            // value={text}
          />
          <Ionicons
            style={styles.searchIcon}
            name="search"
            color="black"
            size={17}
          />
        </View>
      </View>
    </View>
  );
}

const postureInfo = [
  { id: 0, name: "Mắt", percent: 40, color: "high" },
  { id: 1, name: "Cổ", percent: 85, color: "low" },
  { id: 2, name: "Lưng", percent: 60, color: "medium" },
];

function SeatPostureAnalyze() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Phân tích dáng ngồi của bé</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: "22px" }}>
        <Ionicons
          name="sad-outline"
          size={75}
          // color={settings.color.classDiagram.high}
        />
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            paddingVertical: 8,
          }}
        >
          <FlatList
            data={postureInfo}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                    marginBottom: 1,
                  }}
                >
                  <ProgressBar value={item.percent} color={item.color} />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      marginBottom: 2,
                      width: 35,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item, idx) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const childInfo = [
  {
    id: 1,
    icon: "body-outline",
    text1: "Chiều cao bé",
    text2: "140kg",
  },
  {
    id: 2,
    icon: "paw-outline",
    text1: "Cân nặng bé",
    text2: "50kg",
  },
  {
    id: 3,
    icon: "library-outline",
    text1: "Chiều cao bàn học",
    text2: "100cm",
  },
  {
    id: 4,
    icon: "cube-outline",
    text1: "Chiều cao ghế",
    text2: "50cm",
  },
];

function ChildInfo() {
  return (
    <View style={styles.section}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginBottom: 13,
        }}
      >
        <Text style={{ fontSize: 19, fontWeight: 700 }}>Thông tin của bé</Text>
        <Ionicons style={{ marginTop: 2 }} name="create-outline" size={18} />
      </View>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <FlatList
          data={childInfo}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <Ionicons name={item.icon} size={18} />
                <Text style={{ fontSize: 17 }}>
                  {item.text1}:{" "}
                  <Text style={{ fontStyle: "italic" }}>{item.text2}</Text>
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, idx) => item.id}
        />
      </View>
    </View>
  );
}

function ActivitySuggestion() {
  return (
    <View
      style={{
        backgroundColor: "#DDF2FF",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          Hoạt động gợi ý hôm nay
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "rgb(121, 121, 121)",
            fontWeight: 500,
          }}
        >
          8AM - 10AM
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
            marginRight: 10,
          }}
          source={require("../../assets/image/HomePage/running.jpg")}
        />
      </View>
    </View>
  );
}
function Index() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <Pressable
            style={{ height: 10, width: 10, backgroundColor: "red" }}
          />
        )}
      />
    </View>
  );
}

function TimePractice() {
  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Thời gian tập cùng bé</Text>
        {/* <View style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
          <View style={styles.dateBox}>
            <Text>Sat</Text>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>26</Text>
          </View>
        </View> */}
        {/* <Index /> */}
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ width: "100%" }}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width,
                  paddingHorizontal: 20,
                  // borderRadius: 30,
                  // boxShadow:
                  //   "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
              >
                <View
                  style={{
                    border: "2px solid #c8c8c8",
                    padding: 30,
                    borderRadius: 15,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 15,
                      justifyContent: "center",
                    }}
                  >
                    <Icon source="calendar-blank-outline" size={28} />
                    <Text
                      style={{
                        fontWeight: 300,
                        fontSize: 100,
                        marginTop: "-35px",
                      }}
                    >
                      20
                    </Text>
                    <View
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Text
                        style={{
                          fontWeight: 300,
                          fontSize: 40,
                          marginBottom: "15px",
                        }}
                      >
                        Nov
                      </Text>
                    </View>
                  </View>
                  <Text>Thứ bảy. 20/11/2023</Text>
                  <Text>{index}</Text>
                </View>
              </View>
            );
          }}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}

function TeacherStats() {
  return (
    <>
      <View style={{ paddingVertical: 15 }}>
        <Text
          style={[
            styles.sectionHeader,
            { marginBottom: 0, paddingHorizontal: 20, marginBottom: "-20px" },
          ]}
        >
          Thời gian phụ huynh tập cùng bé
        </Text>
        <VictoryChart
          minDomain={{ y: 0 }}
          maxDomain={{ y: 100 }}
          domainPadding={{ x: 15 }}
        >
          <VictoryBar
            title="this is"
            cornerRadius={{ top: ({ datum }) => 10 }}
            style={{
              data: {
                fill: settings.color.primary,
                width: 20,
              },
            }}
            x={(datum) => datum.xLabel}
            data={[
              { x: 1, y: 20, y0: 0, xLabel: "Tiết 1" },
              { x: 2, y: 50, y0: 0, xLabel: "Tiết 2" },
              { x: 3, y: 30, y0: 0, xLabel: "Tiết 3" },
              { x: 4, y: 80, y0: 0, xLabel: "Tiết 4" },
              { x: 5, y: 60, y0: 0, xLabel: "Tiết 5" },
              { x: 6, y: 30, y0: 0, xLabel: "Tiết 6" },
            ]}
          />
        </VictoryChart>
      </View>
      <View style={{ paddingBottom: 15 }}>
        <Text
          style={[
            styles.sectionHeader,
            { marginBottom: 0, paddingHorizontal: 20, marginBottom: "-20px" },
          ]}
        >
          Tỉ lệ ngồi sai theo ngày trong tuần
        </Text>
        <VictoryChart minDomain={{ y: 0 }} maxDomain={{ y: 100 }}>
          <VictoryLine
            interpolation="natural"
            style={{
              data: {
                stroke: settings.color.primary,
                strokeWidth: 5,
                strokeLinecap: "round",
              },
            }}
            x={(datum) => datum.xLabel}
            data={[
              { x: 1, y: 15, xLabel: "Thứ hai" },
              { x: 2, y: 30, xLabel: "Thứ ba" },
              { x: 3, y: 60, xLabel: "Thứ tư" },
              { x: 4, y: 40, xLabel: "Thứ năm" },
              { x: 5, y: 80, xLabel: "Thứ sáu" },
            ]}
          />
        </VictoryChart>
      </View>
    </>
  );
}

const topStudents = [
  {
    id: 0,
    name: "Hoàng Hưng",
  },
  {
    id: 1,
    name: "Hoàng Hưng",
  },
  {
    id: 2,
    name: "Đinh Lê Dũng",
  },
  {
    id: 3,
    name: "Đinh Lê Dũng",
  },
  {
    id: 4,
    name: "Nguyễn Văn A",
  },
];

function TopStudent() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Top học sinh ngồi sai tư thế</Text>
      <FlatList
        data={topStudents}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: 50,
                alignItems: "center",
                gap: 20,
              }}
            >
              <Text style={{ color: settings.color.gray, fontSize: 15 }}>
                {item.id + 1}
              </Text>
              <Text style={{ fontSize: 17, fontWeight: 600, width: "40%" }}>
                {item.name}
              </Text>
              <ProgressBar value={80} color={"high"} />
              <Text style={{ fontWeight: 500, fontSize: 15 }}>80%</Text>
            </View>
          );
        }}
        keyExtractor={(item, idx) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  profileSection: {
    position: "relative",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "rgb(255, 123, 66)",
    marginBottom: "28px",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    paddingTop: "32px",
    paddingHorizontal: "32px",
    paddingBottom: "50px",
  },
  profileImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: settings.color.lightGray,
  },
  profileTextSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  profileText: {
    fontSize: "21px",
    fontWeight: 600,
    marginBottom: "5px",
    color: "white",
  },
  inputWrapper: {
    height: 52,
    width: "90%",
    position: "absolute",
    bottom: "-28px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  input: {
    padding: 10,
    paddingLeft: 44,
    paddingRight: 15,
    borderRadius: 25,
    backgroundColor: "#F5F5F5",
    fontSize: 17,
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    left: 16,
    transform: "translateY(-65%)",
  },
  section: {
    paddingVertical: "10px",
    paddingHorizontal: "20px",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 19,
    fontWeight: 700,
    marginBottom: 13,
  },
  sectionImageLeft: {
    width: 65,
    height: 65,
  },

  dateBox: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: settings.color.lightGray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
});
