export const styles = {
    login: {
    width: "100%",
    height: "100%",
  },
  title:{

  },
  subtitle:{

  },
  button: {
    fontWeight: "medium",
    backgroundColor: "accent.main",
    borderRadius: 1,
    padding: 1.25,
    textTransform: "none",
    width: "100%",
    "&:hover": {
      backgroundColor: "accent.hover",
    },
  },
  input:{
    "&.MuiTextField-root":{
      borderRadius: 1,
    },
    '& label.Mui-focused': {
      color: 'accent.hover',
    },
    '& .MuiInput-underline:after': {
      // borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'accent.main',
      },
      '&:hover fieldset': {
        // borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  }
};
