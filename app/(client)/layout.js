"use client";
import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {theme} from '../theme';
import { useEffect, useState } from "react";
import {Toaster} from 'react-hot-toast';

export default function ClientLayout({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useState(theme);

  // useEffect(() => {
    // setThemeMode({
    //   ...themeMode,
    //   palette:{
    //     ...themeMode.palette,
    //     mode:"light"
    //   }
    // })
  // });

  return (
    <>
      <ThemeProvider theme={createTheme(themeMode)}>
        <CssBaseline />
        {children}
        <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 3000,
          iconTheme: {
            primary: '#CF5C36',
            secondary: '#fafafa',
          },
          style:{
            // border: '1px solid #CF5C36'
          }
        }} 
        />
      </ThemeProvider>
    </>
  );
}
