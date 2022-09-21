interface StringDict {
  [key: string]: string;
}

interface NumDict {
  [key: string]: number;
}
export interface ColourTheme extends StringDict {
  mainBackground: string;
  primaryText: string;
}

export interface SpacingTheme extends NumDict {
  half: number;
  base: number;
  double: number;
}

export interface BreakpointsTheme extends NumDict {
  phone: number;
  tablet: number;
}

export interface FontFamiliesTheme extends StringDict {
  bungee: string;
  overpassThin: string;
  overpassRegular: string;
  overpassBold: string;
}
export interface TextStylesTheme {
  title: {
    fontSize: number;
    fontFamily: string;
  };
  heading: {
    fontSize: number;
    fontFamily: string;
  };
  subheading: {
    fontSize: number;
    fontFamily: string;
  };
  body: {
    fontSize: number;
    fontFamily: string;
  };
  caption: {
    fontSize: number;
    fontFamily: string;
  };
}

export type TextType = "title" | "heading" | "subheading" | "body" | "caption";

export interface Theme {
  id: string;
  colors: ColourTheme;
  spacing: SpacingTheme;
  breakpoints: BreakpointsTheme;
  fontFamilies: FontFamiliesTheme;
  textStyles: TextStylesTheme;
}
