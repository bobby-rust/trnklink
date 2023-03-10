"use client";
import { Box } from '@mui/material';
import React from 'react';
import {styles} from './styles';

export default function PreviewLayout({children}) {
  return (
    <Box height={"100vh"}>
      <Box sx={styles.previewLeft} p={2}>
        {children}
      </Box>

      <Box sx={styles.previewRight}></Box>
    </Box>
  )
}
