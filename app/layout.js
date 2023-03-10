"use client";

import "./globals.css";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { theme } from "./theme";
import { useEffect, useState } from "react";

export const metadata = {
  title: "TrnkLink: The all-in-one link in bio tool",
  description:
    "Create your own unique & highly customizable bio page. Custom components & colors. Multiple ready-to-use layouts.",
};

export default function RootLayout({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useState(theme);

  useEffect(() => {
    // setThemeMode({
    //   ...themeMode,
    //   palette:{
    //     ...themeMode.palette,
    //     mode:"light"
    //   }
    // })
  });

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={createTheme(themeMode)}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
