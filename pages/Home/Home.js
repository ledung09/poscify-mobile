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

const pageComponents = [
  {
    id: 0,
    component: SeatPostureAnalyze,
  },
  {
    id: 1,
    component: ActivitySuggestion,
  },
  {
    id: 2,
    component: TimePractice,
  },
];

export default function Home() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <ProfileSecion />
      <FlatList
        // contentContainerStyle={{
        //   flexGrow: 1,
        // }}
        data={pageComponents}
        renderItem={({ item }) => {
          return <item.component />;
        }}
        // ListHeaderComponent={ProfileSecion}
        // stickyHeaderIndices={[0]}
        keyExtractor={(item, idx) => item.id}
      />
      {/* <ProfileSecion />
      <SeatPostureAnalyze />
      <ActivitySuggestion />
      <TimePractice /> */}
    </View>
  );
}

function ProfileSecion() {
  return (
    <View style={{}}>
      <View style={styles.profileSection}>
        <View style={styles.userInfo}>
          <View style={styles.profileImage}></View>
          <View style={styles.profileTextSection}>
            <Text style={styles.profileText}>Xin chào Dũng,</Text>
            <Text style={styles.profileText}>đã đến với Poscify</Text>
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
            }}
          >
            <ProgressBar value={50} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                marginBottom: 2,
                width: 28,
              }}
            >
              Eye
            </Text>
          </View>
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
            fontSize: 15.5,
            color: settings.color.gray,
            fontWeight: 600,
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  profileSection: {
    position: "relative",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: settings.color.secondary,
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
    fontSize: "20px",
    fontWeight: 500,
    color: "black",
    marginBottom: "3px",
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
    paddingVertical: "22px",
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
