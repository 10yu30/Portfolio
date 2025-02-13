"use client"

import type React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>
}

export default ClientWrapper

