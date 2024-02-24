import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getTimeDifference } from "../../util/util";
import { useDate } from "../hooks/useDate";
import { useNavigation } from "@react-navigation/native";
import { useAccount } from "../hooks/useAccount";

export default function InExercise({inner=false}) {
  const { inExercise } = useAccount()
  const { navigate } = useNavigation();
  const { date, time } = useDate();

  return (
    <View>
      {
        inExercise &&
        <Pressable
          onPress={() => {
            if (inner) navigate('Exercise', { id: inExercise.id  })
            else navigate("Exercises", { screen: "Exercise", params: { id: 1 } });
          }}
          style={{ paddingVertical: 8, width: "100%", backgroundColor: "red" }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "white",
              margin: "auto",
            }}
          >
            Đang trong bài tập {inExercise.name} -{" "}
            {getTimeDifference(inExercise.startTime, date)}
          </Text>
        </Pressable>
      }
    </View>
  );
}

const styles = StyleSheet.create({});
