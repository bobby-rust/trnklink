"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ThemeProvider } from '@mui/material';
import { theme } from './theme'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <main>
      
    </main>
    </ThemeProvider>
  )
}
