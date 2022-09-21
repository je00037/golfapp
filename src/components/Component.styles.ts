import { StyleSheet } from "react-native";
import { Theme } from "../styling/interfaces";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.mainBackground,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontFamily: theme.fontFamilies.overpassRegular,
      color: theme.colors.heading,
      marginVertical: theme.spacing.double,
      fontSize: theme.fontSizes.body,
    },
    title: {
      fontFamily: theme.fontFamilies.bungee,
      color: theme.colors.heading,
      fontSize: theme.fontSizes.title,
    },
  });

  return styles;
};
