import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AnalyzeInput from "./AnalyzeInput";
import AnalyzeResult from "./AnalyzeResult";

const Stack = createNativeStackNavigator();

export default function AnalyzeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center", }}>
      <Stack.Screen
        name="Analyze Input"
        component={AnalyzeInput}
        options={({ route, navigation }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="AnalyzeResult"
        component={AnalyzeResult}
        options={({ route, navigation }) => ({
          headerTitle: "Kết quả phân tích"
        })}
      />
    </Stack.Navigator>
  );
}
