"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdTitle } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { styles } from "./styles";
import {mediaIcons} from "./icons";

const LinkElementTool = ({element}) => {
  return (
    <></>
  )
}

export default function ToolsPage() {
  const [linkElements, setLinkElements] = useState([
    {
      type:"",
      title:"",
      link:"",
      icon: <></>
    }
  ])
  useEffect(() => {}, []);

  return (
    <Box m={"auto"} maxWidth={640}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            mt={1}
            mb={0.5}
            sx={{
              backgroundColor: "primary",
              color: "secondary",
              borderColor: "complement.main",
            }}
          >
            <Typography
              color={"secondary"}
              sx={{
                fontWeight: "regular",
              }}
            >
              Choose what element to create:
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box>
            <Button href="#" sx={styles.button2}>
              <Typography
                color={"secondary"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "regular",
                }}
                fontSize={14}
              >
                <Box
                  component={"span"}
                  sx={{
                    display: "inline-flex",
                  }}
                  p={0.5}
                >
                  <MdTitle fontSize={16} />
                </Box>
                Header
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box>
            <Button href="#" sx={styles.button2}>
              <Typography
                color={"secondary"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "regular",
                }}
                fontSize={14}
              >
                <Box
                  component={"span"}
                  sx={{
                    display: "inline-flex",
                  }}
                  p={0.5}
                >
                  <BiLinkAlt fontSize={16} />
                </Box>
                Link
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid mt={2} container spacing={1}>
        {linkElements.map((e)=>
        <Grid item xs={12}>
        <LinkElementTool element={e} />
      </Grid>)}
      </Grid>
    </Box>
  );
}
