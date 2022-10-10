import React, { FC, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useAuth } from "./src/authContext";

import { Dashboard } from "./src/screens/Dashboard";
import { Settings } from "./src/screens/Settings";
import { PuttLogger } from "./src/screens/PuttLogger";
import { Welcome } from "./src/screens/Welcome";
import { Text } from "./src/components/Text";
import { Screen } from "./src/components/Screen";

export const Onboarder: FC = () => {
  const { user, setUser, getUser, loading } = useAuth();

  const Tabs = createBottomTabNavigator();

  const checkUserStatus = () => {
    getUser();
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  if (loading)
    return (
      <Screen>
        <Text type="body">Loading...</Text>
      </Screen>
    );

  return user ? (
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
  ) : (
    <Welcome userHandler={setUser} />
  );
};
