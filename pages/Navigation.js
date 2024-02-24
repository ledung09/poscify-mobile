import { View, Text, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { settings } from "../setting/setting";

import PracticeStack from "./Practice/PracticeStack";
import StatsStack from "./Stats/StatsStack";
import Home from "./Home/Home";
import AnalyzeStack from "./Analyze/AnalyzeStack";
import Setting from "./Setting/Setting";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import OutterNonLogin from "./Home/OutterNonLogin";
import { useDate } from "../components/hooks/useDate";
import { getTimeDifference } from "../util/util";
import InExercise from "../components/page/InExercise";

const Tab = createBottomTabNavigator();

const navData = [
  // {
  //   name: "OutterLogin",
  //   headerText: "Outter",
  //   iconName: "home",
  //   component: OutterNonLogin,
  // },
  {
    name: "Home",
    headerText: "Trang chủ",
    iconName: "home",
    component: Home,
  },
  {
    name: "Analyze",
    headerText: "Phân tích",
    iconName: "analytics",
    component: AnalyzeStack,
  },
  {
    name: "Exercises",
    headerText: "Bài tập",
    iconName: "layers",
    component: PracticeStack,
  },
  // {
  //   name: "Statistic",
  //   headerText: "Thống kê",
  //   iconName: "stats-chart",
  //   component: StatsStack,
  // },
  {
    name: "Setting",
    headerText: "Tài khoản",
    iconName: "person",
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
            tabBarStyle: {
              borderColor: "rgb(234 234 234)",
              height: 55,
              paddingTop: 5,
              paddingBottom: 5,
              borderRadius: 5,
              borderWidth: 0.5,
            },
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
