import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { settings } from "../../setting/setting";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "../../components/ui/ProgressBar";

export default function Home() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <ScrollView style={styles.container}>
      <ProfileSecion />
      <SeatPostureAnalyze />
      <ActivitySuggestion />
      <TimePractice />
    </ScrollView>
  );
}

function ProfileSecion() {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

function SeatPostureAnalyze() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Phân tích dáng ngồi của bé</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
        <Ionicons name="sad-outline" size={70} />
        <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
                fontSize: 16,
                fontWeight: 500,
                marginBottom: 5,
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
        paddingLeft: 30,
        paddingRight: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
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
          alignItems: "center",
          justifyContent: "center",
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  profileSection: {
    position: "relative",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: settings.color.primary,
    marginBottom: "24px",
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
    color: "white",
    marginBottom: "3px",
  },
  inputWrapper: {
    height: 52,
    width: "90%",
    position: "absolute",
    bottom: "-24px",
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
    paddingVertical: "25px",
    paddingHorizontal: "20px",
  },
  sectionHeader: {
    fontSize: 19,
    fontWeight: 600,
    marginBottom: 18,
  },
  sectionImageLeft: {
    width: 65,
    height: 65,
  },
});
