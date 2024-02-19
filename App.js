import * as React from "react";

import { View, Text, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { settings } from "./setting/setting";
import PracticeStack from "./pages/Practice/PracticeStack";
import HomePage from "./pages/HomePage/HomePage";
import Stats from "./pages/Stats/Stats";
import Analyze from "./pages/Analyze/Analyze";
import StatsStack from "./pages/Stats/StatsStack";
import Home from "./pages/Home/Home";

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
    name: "Trang chủ",
    iconName: "home",
    component: Home,
  },
  {
    name: "Phân tích",
    iconName: "analyze",
    component: HomePage,
  },
  {
    name: "Bài tập",
    iconName: "body",
    component: PracticeStack,
  },
  {
    name: "Lịch sử",
    iconName: "reload",
    component: Analyze,
  },
  {
    name: "Số liệu",
    iconName: "stats-chart",
    component: StatsStack,
  },
];

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
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
                headerShown: ["Trang chủ", "Bài tập", "Số liệu"].includes(
                  route.name
                )
                  ? false
                  : true,
                tabBarLabel: nav.name,
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
