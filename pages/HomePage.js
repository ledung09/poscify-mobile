import { Text, View, StyleSheet } from "react-native";

export default function HomePage() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "1rem",
    paddingHorizontal: "2rem",
  },
  maintitle: {
    fontSize: 48,
    fontWeight: "bold",
    // color: "transparent",
    // imageBackground: "linear-gradient(to right, #f97316 0%, #facc15 100%)",
    // WebkitBackgroundClip: "text",
    // textFillColor: "transparent",
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: 1,
  },
  description: {
    marginTop: 24,
    fontSize: 20,
    color: "#64748b",
    textAlign: "justify",
  },
});
