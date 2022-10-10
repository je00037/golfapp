import React from "react";

import { ThemeProvider } from "./src/styling/context";
import { DEFAULT_DARK_THEME } from "./src/styling/theme";
import { AuthProvider } from "./src/authContext";
import { Onboarder } from "./Onboarder";

export default function App() {
  return (
    <ThemeProvider initialValue={DEFAULT_DARK_THEME}>
      <AuthProvider>
        <Onboarder />
      </AuthProvider>
    </ThemeProvider>
  );
}
