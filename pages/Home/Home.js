import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { settings } from "../../setting/setting";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { useAccount } from "../../components/hooks/useAccount";
import Carousel from "react-native-reanimated-carousel";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

const pageComponents = [
  {
    id: -2,
    component: TopStudent,
  },
  {
    id: -1,
    component: TeacherStats,
  },
  {
    id: 0,
    component: ChildInfo,
  },
  {
    id: 1,
    component: SeatPostureAnalyze,
  },
  {
    id: 2,
    component: ActivitySuggestion,
  },
  {
    id: 3,
    component: TimePractice,
  },
];

export default function Home() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
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
  // const { account, setAccount } = useAccount();
  const account = {
    name: "1",
    email: "1",
    image: "https://cdn-icons-png.flaticon.com/256/6028/6028690.png",
    role: "!23",
  };

  return (
    <View style={{}}>
      <View style={styles.profileSection}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: account.image,
            }}
            style={styles.profileImage}
          />
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

function SeatPostureAnalyze() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Phân tích dáng ngồi của bé</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: "22px" }}>
        <Ionicons name="sad-outline" size={75} />
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            paddingVertical: 8,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <ProgressBar value={50} color={"low"} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                marginBottom: 2,
                width: 35,
              }}
            >
              Eye
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <ProgressBar value={50} color={"low"} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                marginBottom: 2,
                width: 35,
              }}
            >
              Neck
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <ProgressBar value={50} color={"low"} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                marginBottom: 2,
                width: 35,
              }}
            >
              Back
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ChildInfo() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Thông tin của bé</Text>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={{
            marginBottom: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="body-outline" size={18} />
          <Text style={{ fontSize: 17 }}>
            Chiều cao bé: <Text style={{ fontStyle: "italic" }}>140cm</Text>
          </Text>
        </View>

        <View
          style={{
            marginBottom: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="paw-outline" size={18} />
          <Text style={{ fontSize: 17 }}>
            Cân nặng bé: <Text style={{ fontStyle: "italic" }}>50kg</Text>
          </Text>
        </View>
        <View
          style={{
            marginBottom: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="library-outline" size={18} />
          <Text style={{ fontSize: 17 }}>
            Chiều cao bàn học:{" "}
            <Text style={{ fontStyle: "italic" }}>100cm</Text>
          </Text>
        </View>
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
        marginBottom: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          Hoạt động gợi ý hôm nay
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: settings.color.gray,
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
          }}
          source={require("../../assets/image/HomePage/running.jpg")}
        />
      </View>
    </View>
  );
}

function TimePractice() {
  const r = React.useRef(null);

  const [loop, setLoop] = React.useState(false);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Thời gian tập cùng bé</Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
        <View style={styles.dateBox}>
          <Text>Sat</Text>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>26</Text>
        </View>
      </View>
    </View>
  );
}

function TeacherStats() {
  return (
    <View>
      <VictoryChart
        minDomain={{ y: 0 }}
        maxDomain={{ y: 100 }}
        domainPadding={{ x: 15 }}
      >
        <VictoryBar
          cornerRadius={{ top: ({ datum }) => 10 }}
          style={{
            data: {
              fill: settings.color.primary,
              width: 20,
            },
            axis: { stroke: "black", strokeWidth: 1 },
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
  );
}

const topStudents = [
  {
    id: 0,
    name: "Đinh Lê Dũng",
  },
  {
    id: 1,
    name: "Đinh Lê Dũng",
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
    name: "Đinh Lê Dũng",
  },
  {
    id: 5,
    name: "Đinh Lê Dũng",
  },
];

function TopStudent() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Top 5 học sinh ngồi sai tư thế</Text>
      <FlatList
        data={pageComponents}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
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
    backgroundColor: settings.color.primary,
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
    marginBottom: "4px",
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
  },
  sectionHeader: {
    fontSize: 19,
    fontWeight: 700,
    marginBottom: 12,
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
