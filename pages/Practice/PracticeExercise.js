import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../../components/page/Header";

export default function PracticeExercise() {
  const navigation = useNavigation();
  const { params } = useRoute();

  React.useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          borderColor: "rgb(234 234 234)",
          height: 55,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 5,
          borderWidth: 0.5,
        },
      });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title="Chi tiết bài tập" />

      <Text>{params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
