"use client";
import { Box, Button, Container, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {styles} from '../styles';

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    username:"",
    email:"",
    password:""
  });

  const handleUsernameChange = (e) => {
    setRegisterForm({
      ...registerForm,
      username: e.target.value
    });
  }

  const handleEmailChange = (e) => {
    setRegisterForm({
      ...registerForm,
      email: e.target.value
    });
  }

  const handlePasswordChange = (e) => {
    setRegisterForm({
      ...registerForm,
      password: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <Box sx={{
      height:"100%",
      display:"flex",
      alignItems:"center"
    }}>
      <Box component={"form"} maxWidth={"500px"} width={"100%"} m={"auto"} onSubmit={handleSubmit}>
        <Box>
          <Typography>Create your account</Typography>
          <Typography>Choose your TrnkLink handle.</Typography>
        </Box>
        <Box sx={{
          display:"flex",
          flexDirection: "column",
          gap: 1
        }}>
          <TextField
          placeholder='Username'
          sx={styles.input}
          onChange={handleUsernameChange}
          InputProps={{
            startAdornment: <InputAdornment position='start' color="secondary">trnkl.ink/</InputAdornment>
          }}
          />
          <TextField
          placeholder='Email'
          sx={styles.input}
          onChange={handleEmailChange}
          />
          <TextField
          placeholder='Password'
          sx={styles.input}
          onChange={handlePasswordChange}
          />
        </Box>
        <Box>
          <Button type="submit" sx={styles.button}>
            Create Account
          </Button>
        </Box>
    </Box>
    </Box>
  )
}
