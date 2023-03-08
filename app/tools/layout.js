"use client";
import { Box } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

export default function ToolsLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        <Box>{children}</Box>
      </main>
    </>
  );
}
