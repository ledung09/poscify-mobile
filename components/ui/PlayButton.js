import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { settings } from "../../setting/setting";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function PlayButton({ id }) {
  const { navigate } = useNavigation();

  return (
    <Pressable
      style={styles.playBtnOutter}
      onPress={() => {
        navigate("Exercise", { id: id });
      }}
    >
      <Ionicons name="play" color="white" size={16} style={{ marginLeft: 3 }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  playBtnOutter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: settings.color.primary,
  },
  barInner: {
    backgroundColor: settings.color.primary,
    height: "8px",
    borderRadius: "5px",
  },
  barText: {
    fontSize: "10px",
    marginVertical: "auto",
    marginHorizontal: "auto",
    fontWeight: "700",
  },
});
