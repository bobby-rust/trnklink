"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { styles } from "./styles";

export default function ToolsPage() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <Box>
            <Button
            href="#"
              sx={styles.button}
            >
              <Typography
                color={"primary"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "medium",
                }}
              >
                <Box
                  component={"span"}
                  sx={{
                    display: "inline-flex",
                  }}
                  p={0.5}
                >
                  <IoMdAdd fontSize={20} />
                </Box>
                Add link
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
