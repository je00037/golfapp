import React, { FC, ReactNode } from "react";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { useTheme } from "../styling/context";
import { createStyles } from "./Screen.styles";
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
import { Text } from "../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children?: ReactNode;
}

export const Screen: FC<ScreenProps> = ({ children }) => {
  const { theme: currentTheme } = useTheme();
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
      <SafeAreaView
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};
