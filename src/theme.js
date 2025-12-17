"use client"
import { Orbitron } from "next/font/google"

import { createTheme } from "@mui/material/styles"
import { lime, green, red, amber, lightGreen } from "@mui/material/colors"

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    background: {
      default: "#FBFBFB",
    },
    primary: green,
    secondary: lime,
    success: {
      main: lightGreen.A700,
    },
    error: {
      main: red.A200,
    },
    warning: {
      main: amber.A200,
    },
  },
  typography: {
    fontFamily: orbitron.style.fontFamily,
    body1: {
      letterSpacing: 0.5,
    },
    body2: {
      letterSpacing: 0.5,
    },
    subtitle1: {
      letterSpacing: 0.5,
    },
    subtitle2: {
      letterSpacing: 0.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: "12px 24px",
        },
      },
    },
  },
})

export default theme
