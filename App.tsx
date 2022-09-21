import React from "react";

import { MainContent } from "./src/components/Component";
import { ThemeProvider } from "./src/styling/context";
import { DEFAULT_DARK_THEME } from "./src/styling/theme";

export default function App() {
  return (
    <ThemeProvider initialValue={DEFAULT_DARK_THEME}>
      <MainContent />
    </ThemeProvider>
  );
}
