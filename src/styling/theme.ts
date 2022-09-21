import { Theme, ColourTheme, SpacingTheme } from "./interfaces";
import { PALETTE } from "./palette";

export const LIGHT_ID = "lightTheme";
export const DARK_ID = "darkTheme";

const DEFAULT_DARK_COLOURS: ColourTheme = {
  mainBackground: PALETTE.green.deep,
  heading: PALETTE.green.pale,
  // subtitle:
  // body: ,
  // caption: ,
  // primaryBtn: ,
  // secondaryBtn: ,
};

const DEFAULT_LIGHT_COLOURS = {
  mainBackground: PALETTE.green.pale,
  heading: PALETTE.green.dark,
  // subtitle:
  // body: ,
  // caption: ,
  // primaryBtn: ,
  // secondaryBtn: ,
};

const DEFAULT_SPACING: SpacingTheme = {
  base: 16,
  half: 8,
  double: 32,
};

export const DEFAULT_LIGHT_THEME: Theme = {
  id: LIGHT_ID,
  colours: DEFAULT_LIGHT_COLOURS,
  spacing: DEFAULT_SPACING,
};

export const DEFAULT_DARK_THEME: Theme = {
  id: DARK_ID,
  colours: DEFAULT_DARK_COLOURS,
  spacing: DEFAULT_SPACING,
};
