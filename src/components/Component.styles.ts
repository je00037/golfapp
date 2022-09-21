import { StyleSheet } from "react-native";
import { Theme } from "../styling/interfaces";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colours.mainBackground,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.colours.heading,
      marginBottom: theme.spacing.double,
    },
  });

  return styles;
};
