interface StringDict {
  [key: string]: string;
}

interface NumDict {
  [key: string]: number;
}
export interface ColourTheme extends StringDict {
  mainBackground: string;
  heading: string;
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

export interface FontSizesTheme extends NumDict {
  title: number;
  heading: number;
  subheading: number;
  body: number;
  caption: number;
}

export interface Theme {
  id: string;
  colors: ColourTheme;
  spacing: SpacingTheme;
  breakpoints: BreakpointsTheme;
  fontFamilies: FontFamiliesTheme;
  fontSizes: FontSizesTheme;
}
