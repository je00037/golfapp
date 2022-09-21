import React, { FC } from "react";
import { View, Pressable } from "react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../styling/context";
import { Text } from "./Text";
import { createStyles } from "./Component.styles";

export const MainContent: FC = () => {
  const { toggleTheme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text type="title">Golf App</Text>
      <Text type="heading">Open up Joe.js to start working on your app!</Text>
      <Text type="subheading">Subheading text</Text>
      <Pressable onPress={toggleTheme}>
        <Text type="body">Change Theme</Text>
      </Pressable>
      <Text type="caption">Caption text</Text>
    </View>
  );
};
