import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Practice from "./Practice";
import PracticeExercise from "./PracticeExercise";

const Stack = createNativeStackNavigator();

export default function PracticeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Practice"
        component={Practice}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Exercise"
        component={PracticeExercise}
        options={({ route, navigation }) => ({})}
      />
    </Stack.Navigator>
  );
}
