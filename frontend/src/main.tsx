import React from "react"
import { createRoot } from "react-dom/client"
import App from "./views/App"
import "./assets/styles/index.scss"
import "tailwindcss/tailwind.css"
import { NextUIProvider } from "@nextui-org/react"

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <NextUIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>
)
