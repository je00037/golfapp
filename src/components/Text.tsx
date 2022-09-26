import React, { FC, ReactNode } from "react";
import { useTheme } from "../styling/context";
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
import { TextType } from "../styling/interfaces";
import { StyleProp, TextStyle } from "react-native";

interface TextProps {
  type: TextType;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export const Text: FC<TextProps> = ({ children, type, style }) => {
  const { theme } = useTheme();

  const progress = useDerivedValue(() => {
    return withTiming(theme.id === LIGHT_ID ? 1 : 0);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [
        DEFAULT_DARK_THEME.colors.primaryText,
        DEFAULT_LIGHT_THEME.colors.primaryText,
      ]
    );

    return {
      color,
    };
  });

  return (
    <Animated.Text style={[animatedStyle, theme.textStyles[type], style]}>
      {children}
    </Animated.Text>
  );
};
