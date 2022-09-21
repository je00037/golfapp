import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "../styling/context";
import { Theme } from "../styling/interfaces";

type StyleSheetDict = ReturnType<typeof StyleSheet.create>;

export const useThemedStyles = <T extends StyleSheetDict>(
  createStyles: (theme: Theme) => T
) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [createStyles, theme]);
  return styles;
};
