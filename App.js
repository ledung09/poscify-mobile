import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { settings } from "./setting/setting";
import PracticeStack from "./pages/Practice/PracticeStack";
import HomePage from "./pages/HomePage/HomePage";

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
    component: HomeScreen,
  },
  {
    name: "Số liệu",
    iconName: "stats-chart",
    component: HomeScreen,
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
                headerShown: ["Trang chủ", "Bài tập"].includes(route.name)
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
