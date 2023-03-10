"use client";

import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "../styles";
import { loginValidationSchema } from "../(validation)/login.validation";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { logoutUser } from "../../../api/logoutUser";

export default function LoginPage() {
  const {values, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, actions) => {
      await fetch("/api/user/login", {method:"POST",body: JSON.stringify(values)}).then((res) => res.json()).then((data) => {
        if(data.success){
          toast.success(data.message);
          console.log( data.token)
          document.cookie = "jwt=" + data.token;
          // window.location.href = "/tools";
        } else {
          toast.error(data.message);
        } 
      });
    },
  });

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        // alignItems:"flex-start"
      }}
    >
      <Box
        component={"form"}
        maxWidth={"500px"}
        width={"100%"}
        m={"auto"}
        onSubmit={handleSubmit}
      >
        <Box mb={4}>
          <Typography mb={1} sx={styles.title}>
            Log in to your TrnkLink
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            placeholder="Username"
            id={"username"}
            type="text"
            value={values.username}
            error={errors.username && touched.username}
            onBlur={handleBlur}
            onChange={handleChange}
            sx={styles.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" color="secondary">
                  trnkl.ink/
                </InputAdornment>
              ),
            }}
            helperText={errors.username && touched.username && errors.username}
          />
          <TextField
            placeholder="Password"
            id={"password"}
            error={errors.password && touched.password}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            sx={styles.input}
            type="password"
            helperText={errors.password && touched.password && errors.password}
          />
        </Box>
        <Box mt={8}>
          <Button type="submit" sx={styles.button} disabled={isSubmitting}>
            Log In
          </Button>
          <Typography
            textAlign={"center"}
            sx={styles.subtitle}
            color={"complement.main"}
            mt={2}
          >
            Don't have an account?{" "}
            <Box component={"a"} display={"inline"} href="/register" color={"black"}>
              Sign up
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
