"use client"

import { useState } from "react"
import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import Link from "next/link"
import { navItems } from "@/lib/data/navItems"
import { blueGrey } from "@mui/material/colors"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        component="nav"
        elevation={0}
        sx={{ borderBottom: "1px solid", borderColor: blueGrey[200] }}
      >
        <Container>
          <Toolbar>
            <Link href="/">
              <Image
                src="/images/rick-and-morty-logo.svg"
                alt="Rick and Morty Logo"
                width={100}
                height={80}
              />
            </Link>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{
                flexGrow: 1,
                ml: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              {navItems.map((item) => (
                <Link key={`header-nav-item-${item.href}`} href={item.href}>
                  <Button variant="text" sx={{ fontWeight: 700 }}>
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              color={blueGrey[900]}
              aria-label="open menu"
              aria-controls={open ? "mobile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleMenuOpen}
              sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={`menu-nav-item-${item.href}`}
            onClick={handleMenuClose}
            component={Link}
            href={item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default Header
