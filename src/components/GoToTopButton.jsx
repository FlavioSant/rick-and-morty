"use client"

import { ArrowUpward } from "@mui/icons-material"
import { Fab } from "@mui/material"
import { useEffect, useState } from "react"

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 100)
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <Fab
      color="secondary"
      aria-label="go to top"
      sx={{ position: "fixed", bottom: { xs: 20, md: 40 }, right: { xs: 20, md: 40 } }}
      onClick={handleClick}
    >
      <ArrowUpward />
    </Fab>
  )
}

export default GoToTopButton
