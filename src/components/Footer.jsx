import { Box, Container, List, ListItem, Stack } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import Image from "next/image"
import Link from "next/link"
import { navItems } from "@/lib/data/navItems"

const Footer = () => {
  return (
    <Box bgcolor={blueGrey[900]}>
      <Container>
        <Stack direction="column" alignItems="center" py={4}>
          <Image
            src="/images/rick-and-morty-logo.svg"
            alt="Rick and Morty Logo"
            width={100}
            height={80}
          />

          <List sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {navItems.map((item) => (
              <ListItem
                key={`footer-nav-item-${item.href}`}
                disableGutters
                sx={{ fontSize: 12, fontWeight: 500, ":hover": { opacity: 0.8 } }}
              >
                <Link href={item.href} style={{ textDecoration: "none", color: "white" }}>
                  {item.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
