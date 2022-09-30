import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ThemeProvider, useTheme } from "./src/styling/context";
import { DARK_ID, DEFAULT_DARK_THEME } from "./src/styling/theme";
import { Dashboard } from "./src/screens/Dashboard";
import { Settings } from "./src/screens/Settings";
import { PuttLogger } from "./src/screens/PuttLogger";

export default function App() {
  const Tabs = createBottomTabNavigator();
  const { theme } = useTheme();

  return (
    <ThemeProvider initialValue={DEFAULT_DARK_THEME}>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconName = "";
              if (route.name === "Dashboard") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "PuttLogger") {
                iconName = focused ? "golf" : "golf-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "construct" : "construct-outline";
              }

              return <Ionicons name={iconName} size={24} color={"#1C1642"} />;
            },
            tabBarActiveTintColor: "#1C1642",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tabs.Screen name="Dashboard" component={Dashboard} />
          <Tabs.Screen name="PuttLogger" component={PuttLogger} />
          <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
