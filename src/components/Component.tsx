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
      <Text type="title">these are TITLE children</Text>
      <Text type="heading">these are HEADING children</Text>
      <Text type="subheading">these are SUBHEADING children</Text>
      <Text type="body">these are BODY children</Text>
      <Text type="caption">these are CAPTION children</Text>

      <Pressable onPress={toggleTheme}>
        <Text type="body">Change Theme</Text>
      </Pressable>
      <View>
        <Text type="heading">these are NESTED children</Text>
      </View>
      <Text type="heading">these are children</Text>
    </Animated.View>
  );
};
