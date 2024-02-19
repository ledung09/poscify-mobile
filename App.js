import * as React from "react";

import { View, Text, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { settings } from "./setting/setting";
import PracticeStack from "./pages/Practice/PracticeStack";
import StatsStack from "./pages/Stats/StatsStack";
import Home from "./pages/Home/Home";
import AnalyzeStack from "./pages/Analyze/AnalyzeStack";
import Setting from "./pages/Setting/Setting";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const navData = [
  {
    name: "Home",
    headerText: "Trang chủ",
    iconName: "home",
    component: Home,
  },
  {
    name: "Analyze",
    headerText: "Thống kê",
    iconName: "analytics",
    component: AnalyzeStack,
  },
  {
    name: "Exercise",
    headerText: "Bài tập",
    iconName: "body",
    component: PracticeStack,
  },
  {
    name: "Statistic",
    headerText: "Thống kê",
    iconName: "stats-chart",
    component: StatsStack,
  },
  {
    name: "Setting",
    headerText: "Cài đặt",
    iconName: "person-circle",
    component: Setting,
  },
];

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // tabBarShowLabel: false,
          headerShown: false,
          headerTitleAlign: "center",
          tabBarActiveTintColor: settings.color.primary,
          tabBarInactiveTintColor: settings.color.gray,
        }}
      >
        {navData.map((nav, idx) => {
          return (
            <Tab.Screen
              key={idx}
              name={nav.name}
              component={nav.component}
              options={({ route, navigation }) => ({
                // headerShown: ["Home", "Analyze", "Exercise", "Statistic"].includes(
                //   route.name
                // )
                //   ? false
                //   : true,
                tabBarLabel: nav.headerText,
                tabBarIcon: ({ color, size, focused }) => (
                  <Ionicons
                    name={
                      route.name === nav.name &&
                      (focused ? nav.iconName : `${nav.iconName}-outline`)
                    }
                    color={color}
                    size={size}
                  />
                ),
              })}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
