import React, { FC, ReactNode } from "react";
import { StyleProp, Text as RNText, TextStyle } from "react-native";
import { useTheme } from "../styling/context";
import { TextType } from "../styling/interfaces";

interface TextProps {
  type: TextType;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export const Text: FC<TextProps> = ({ type, style, children }) => {
  const { theme } = useTheme();
  return (
    <RNText
      style={[
        style,
        theme.textStyles[type],
        { color: theme.colors.primaryText },
      ]}
    >
      {children}
    </RNText>
  );
};
