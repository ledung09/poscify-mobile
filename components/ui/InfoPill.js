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

export function InfoPill({ iconName, text, ...props }) {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <Ionicons name={iconName} color={settings.color.primary} size={14} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: settings.color.secondary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "fit-content",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    gap: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    color: settings.color.primary,
    marginRight: 1,
    marginBottom: 2,
  },
});
