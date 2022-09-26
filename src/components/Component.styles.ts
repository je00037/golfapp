import { StyleSheet } from "react-native";
import { Theme } from "../styling/interfaces";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
    },
  });

  return styles;
};
