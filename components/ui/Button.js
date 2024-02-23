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

export function Button({ iconName, text, ...props }) {
  return (
    <Pressable style={styles.container} {...props}>
      {iconName && (
        <Ionicons
          name={iconName}
          size={18}
          color="white"
          style={{ height: 15 }}
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: settings.color.primary,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    borderRadius: 11,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 19,
    fontWeight: "500",
    color: "white",
  },

  barOutter: {
    backgroundColor: settings.color.lightGray,
    height: "14px",
    width: "100%",
    borderRadius: "5px",
  },
  barInner: {
    backgroundColor: settings.color.primary,
    height: "14px",
    borderRadius: "5px",
  },
  barText: {
    fontSize: "10px",
    marginVertical: "auto",
    marginHorizontal: "auto",
    fontWeight: "700",
  },
});
