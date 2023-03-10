"use client";
import { Box } from '@mui/material';
import React from 'react';
import {styles} from './styles';

export default function LoginRegisterLayout({children}) {
  return (
    <Box height={"100vh"}>
      <Box sx={styles.login} p={3}>
        {children}
      </Box>
    </Box>
  )
}
