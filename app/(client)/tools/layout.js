"use client";
import { Box } from "@mui/material";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import NavBar from "./NavBar";

export default function ToolsLayout({ children }) {

  useEffect(()=>{
    if(!Cookies.get("jwt")){
      window.location.href = "/login";
    }
  },[]);
  return (
    <>
      <NavBar />
      <Box component={"main"}>
        <Box>{children}</Box>
      </Box>
    </>
  );
}
