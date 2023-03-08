"use client";

import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export const metadata = {
  title: 'TrnkLink: The all-in-one link in bio tool',
  description: 'Create your own unique & highly customizable bio page. Custom components & colors. Multiple ready-to-use layouts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
