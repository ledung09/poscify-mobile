import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Stats from "./Stats";
import PracticeExercise from "../Practice/PracticeExercise";
import StatsStudent from "./StatsStudent";
const Stack = createNativeStackNavigator();

export default function StatsStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <Stack.Screen
        name="Class Statistic"
        component={Stats}
        options={({ route, navigation }) => ({})}
      />
      <Stack.Screen
        name="Student Statistic"
        component={StatsStudent}
        options={({ route, navigation }) => ({})}
      />
    </Stack.Navigator>
  );
}
