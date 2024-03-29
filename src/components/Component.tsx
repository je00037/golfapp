import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../styling/context";
import { createStyles } from "./Component.styles";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  LIGHT_ID,
} from "../styling/theme";
import { Text } from "./Text";

export const MainContent: FC = () => {
  const { theme: currentTheme, toggleTheme } = useTheme();
  const styles = useThemedStyles(createStyles);

  const progress = useDerivedValue(() => {
    return withTiming(currentTheme.id === LIGHT_ID ? 1 : 0);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [
        DEFAULT_DARK_THEME.colors.mainBackground,
        DEFAULT_LIGHT_THEME.colors.mainBackground,
      ]
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text type="title">PUTT PAL</Text>
      <Text type="heading">Awesome app to improve your putting.</Text>
      <Pressable onPress={toggleTheme}>
        <Text type="body">Change Theme</Text>
      </Pressable>
    </Animated.View>
  );
};
