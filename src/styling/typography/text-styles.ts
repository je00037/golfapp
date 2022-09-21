import { TextStylesTheme } from "../interfaces";
import { FONT_FAMILIES } from "./font-families";

export const TEXT_STYLES: TextStylesTheme = {
  title: {
    fontSize: 32,
    fontFamily: FONT_FAMILIES.bungee,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONT_FAMILIES.overpassBold,
  },
  subheading: {
    fontSize: 20,
    fontFamily: FONT_FAMILIES.overpassRegular,
  },
  body: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.overpassRegular,
  },
  caption: {
    fontSize: 12,
    fontFamily: FONT_FAMILIES.overpassThin,
  },
};
