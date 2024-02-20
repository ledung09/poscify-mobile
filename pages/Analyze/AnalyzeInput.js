import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { settings } from "../../setting/setting";
import { Button } from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";

export default function AnalyzeInput() {
  const { navigate } = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-photo/3d-cute-cartoon-girl-studying-education-illustration_988987-3325.jpg",
          }}
          style={{ width: "72%", height: "250px", objectFit: "contain" }}
        />

        <Text style={styles.title}>
          Pos<Text style={{ color: settings.color.primary }}>cify</Text>
        </Text>

        <Text style={styles.description}>
          Hãy cho chúng tôi phân tích dáng ngồi của con bạn!
        </Text>
        <Button onPress={() => {
          navigate("AnalyzeResult", {})
        }} iconName="cloud-upload" text="Đăng tải video của bạn"  />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    paddingVertical: "20px",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  wrapper: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    maxWidth: "85%",
    lineHeight: "1.3",
    marginBottom: "50px",
  },
});
