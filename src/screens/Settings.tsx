import React, { FC } from "react";
import { Pressable } from "react-native";
import { useTheme } from "../styling/context";
import { Text } from "../components/Text";
import { Screen } from "../components/Screen";

export const Settings: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Screen>
      <Text type="title">PUTT PAL</Text>
      <Text type="heading">Awesome app to improve your putting.</Text>
      <Pressable onPress={toggleTheme}>
        <Text type="body">Change Theme</Text>
      </Pressable>
    </Screen>
  );
};
