import { createTheme } from "@shopify/restyle";

import { fontFamilies } from "./typography/font-families";

import {
  Theme,
  ColourTheme,
  SpacingTheme,
  BreakpointsTheme,
} from "./interfaces";
import { PALETTE } from "./palette";
import { fontSizes } from "./typography/font-sizes";

export const LIGHT_ID = "lightTheme";
export const DARK_ID = "darkTheme";

const DEFAULT_DARK_COLOURS: ColourTheme = {
  mainBackground: PALETTE.green.deep,
  heading: PALETTE.green.pale,
};

const DEFAULT_LIGHT_COLOURS = {
  mainBackground: PALETTE.green.pale,
  heading: PALETTE.green.dark,
};

const DEFAULT_SPACING: SpacingTheme = {
  base: 16,
  half: 8,
  double: 32,
};

const DEFAULT_BREAKPOINTS: BreakpointsTheme = {
  phone: 0,
  tablet: 768,
};

const DARK_THEME: Theme = {
  id: DARK_ID,
  colors: DEFAULT_DARK_COLOURS,
  spacing: DEFAULT_SPACING,
  breakpoints: DEFAULT_BREAKPOINTS,
  fontFamilies: fontFamilies,
  fontSizes: fontSizes,
};

const LIGHT_THEME: Theme = {
  ...DARK_THEME,
  id: LIGHT_ID,
  colors: DEFAULT_LIGHT_COLOURS,
};

export const DEFAULT_LIGHT_THEME = createTheme(LIGHT_THEME);
export const DEFAULT_DARK_THEME = createTheme(DARK_THEME);
