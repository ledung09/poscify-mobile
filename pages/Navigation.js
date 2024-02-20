import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { settings } from "../setting/setting";

import PracticeStack from "./Practice/PracticeStack";
import StatsStack from "./Stats/StatsStack";
import Home from "./Home/Home";
import AnalyzeStack from "./Analyze/AnalyzeStack";
import Setting from "./Setting/Setting";

const Tab = createBottomTabNavigator();

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
    name: "Exercises",
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

export default function Navigation() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
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
    </View>
  );
}
