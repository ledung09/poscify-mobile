import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Practice from "./pages/Practice";
import { Ionicons } from "@expo/vector-icons";
import { settings } from "./setting/setting";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const navData = [
  {
    name: "Trang chủ",
    iconName: "home",
    component: HomeScreen,
  },
  {
    name: "Bài tập",
    iconName: "body",
    component: Practice,
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
      <Tab.Navigator>
        {navData.map((nav, idx) => {
          return (
            <Tab.Screen
              key={idx}
              name={nav.name}
              component={nav.component}
              options={({ route, navigation }) => ({
                headerTitleAlign: "center",
                // headerShown: false,
                tabBarActiveTintColor: settings.color.primary,
                tabBarInactiveTintColor: settings.color.gray,
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
