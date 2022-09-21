import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../styling/context";
import { createStyles } from "./Component.styles";

export const MainContent: FC = () => {
  const { toggleTheme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up Joe.js to start working on your app!
      </Text>
      <Pressable onPress={toggleTheme}>
        <Text>Change Theme</Text>
      </Pressable>
    </View>
  );
};
