export const styles = {
  previewLeft: {
    width: {
      xs: "60%",
      md: "65%",
      lg: "70%",
    },
    borderRight: 1,
    height: "100%",
  },
  previewRight: {
    width: "100%",
  },
  button: {
    backgroundColor: "accent.main",
    borderRadius: 1,
    paddingX: 2,
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "accent.hover",
    },
  },
  button2: {
    backgroundColor: "primary",
    border: 1,
    borderColor: "complement.main",
    borderRadius: 1,
    boxShadow: 1,
    width: "100%",
    paddingX: 2,
    textTransform: "none",
    "&:hover": {
      // backgroundColor: "accent.hover",
    },
  },
};
