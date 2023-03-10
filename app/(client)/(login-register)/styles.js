export const styles = {
    login: {
    width: "100%",
    height: "100%",
  },
  title:{
    fontWeight:"extraBold",
    fontSize:{
      xs:28,
      md:38
    },
    lineHeight: 1.2,
    // whiteSpace: "nowrap"
  },
  subtitle:{
    fontWeight:"regular",
    fontSize:16,
  },
  button: {
    fontSize:16,
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
    "&.input-error":{
      borderColor: 'error',
    },
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
