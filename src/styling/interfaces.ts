export interface ColourTheme {
  mainBackground: string;
  heading: string;
}

export interface SpacingTheme {
  half: number;
  base: number;
  double: number;
}

export interface Theme {
  id: string;
  colours: ColourTheme;
  spacing: SpacingTheme;
}
