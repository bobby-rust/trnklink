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
import verifyLoginStatus from "./(login-register)/login/verifyLoginStatus";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export default function ClientLayout({ children}) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useState(createTheme(theme));

  useEffect(() => {
    // setThemeMode({
    //   ...themeMode,
    //   palette:{
    //     ...themeMode.palette,
    //     mode:"light"
    //   }
    // });
    // verifyLoginStatus();
    // setAppTheme(createTheme(theme));
    console.log("Refreshed");
  }, [themeMode]);

  return (
    <>
      <ThemeProvider theme={themeMode}>
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
