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
          size={20}
          color="white"
          style={{ height: 15, marginBottom: 5 }}
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
    borderRadius: 15,
    paddingHorizontal: 22,
    paddingVertical: 13,
  },
  text: {
    fontSize: 18.5,
    fontWeight: "600",
    color: "white",
  },
});
