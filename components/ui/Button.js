import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { settings } from "../../setting/setting";
import { Ionicons } from "@expo/vector-icons";

export function Button({ iconName, text, ...props }) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {iconName && (
        <Ionicons name={iconName} size={18} style={{ height: 15 }} />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: settings.color.primary,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
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
