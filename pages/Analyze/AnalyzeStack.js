import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AnalyzeInput from "./AnalyzeInput";
import AnalyzeResult from "./AnalyzeResult";
import AnalyzeInputStop from "./AnalyzeInputStop";

const Stack = createNativeStackNavigator();

export default function AnalyzeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <Stack.Screen
        name="AnalyzeInput"
        component={AnalyzeInput}
        options={({ route, navigation }) => ({})}
      />
      <Stack.Screen
        name="AnalyzeInputStop"
        component={AnalyzeInputStop}
        options={({ route, navigation }) => ({})}
      />
      <Stack.Screen
        name="AnalyzeResult"
        component={AnalyzeResult}
        options={({ route, navigation }) => ({})}
      />
    </Stack.Navigator>
  );
}
