import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"

import { AuthProvider } from "./hooks/auth"
import { PopupProvider } from "./hooks/PopupProvider"

import theme from "./styles/theme"

import { Routes } from "./router"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PopupProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PopupProvider>
    </ThemeProvider>
  </React.StrictMode>
)
