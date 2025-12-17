import { PageLayout } from "@/components"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { blueGrey, brown } from "@mui/material/colors"
import Image from "next/image"
import Link from "next/link"
import { aboutData } from "@/lib/data/about"

const Home = () => {
  return (
    <Box>
      <Box bgcolor={blueGrey[900]} py={{ xs: 12, md: 4 }}>
        <Container sx={{ px: { xs: 4, md: 0 } }}>
          {/* Page Intro Section */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
          >
            <Stack direction="column" spacing={8} alignItems={{ xs: "center", md: "flex-start" }}>
              <Stack direction="row" spacing={2} sx={{ maxWidth: 500 }}>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "2px",
                    width: 16,
                    height: 60,
                  }}
                />
                <Typography variant="h3" color="white">
                  Welcome to the Rick and Morty page.
                </Typography>
              </Stack>

              <Box sx={{ pl: { xs: 0, md: 3 }, width: { xs: "100%", md: 300 } }}>
                <Link href="/characters" passHref style={{ width: "100%" }}>
                  <Button variant="contained" color="secondary" size="large" fullWidth>
                    View Characters
                  </Button>
                </Link>
              </Box>
            </Stack>

            <Box
              sx={{
                width: { xs: 400, md: 500 },
                height: { xs: 400, md: 500 },
                position: "relative",
              }}
            >
              <Image
                src="/images/rick-and-morty-portal.png"
                alt="Rick and Morty Portal"
                fill
                objectFit="contain"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <PageLayout title="About" alignItems="center">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          spacing={4}
          width="100%"
        >
          <Typography
            variant="body1"
            sx={{ lineHeight: 2, maxWidth: { xs: "100%", md: 700 }, textAlign: "justify" }}
          >
            Rick and Morty is an American adult animated science fiction sitcom created by{" "}
            <strong>Justin Roiland</strong> and <strong>Dan Harmon</strong> for{" "}
            <strong>Cartoon Network&apos;s</strong> nighttime programming block{" "}
            <strong>Adult Swim</strong>. The series follows the misadventures of{" "}
            <strong>Rick Sanchez</strong>, a cynical mad scientist, and his good-hearted but fretful
            grandson <strong>Morty Smith</strong>, who split their time between domestic life and
            interdimensional adventures that take place across an infinite number of realities,
            often traveling to other planets and dimensions through portals and on{" "}
            <strong>Rick&apos;s</strong> flying saucer. The general concept of{" "}
            <strong>Rick and Morty</strong> relies on two conflicting scenarios: domestic family
            drama and a misanthropic grandfather dragging his grandson into hijinks.
          </Typography>

          <Stack direction="column" spacing={2} sx={{ maxWidth: { xs: "100%", md: 350 } }}>
            {aboutData.map((item) => (
              <Box
                key={item.label}
                bgcolor={brown[500]}
                sx={{ py: 1, px: 2, border: "2px solid", borderColor: "black", borderRadius: 2 }}
              >
                <Typography variant="body1" color="white" textAlign="center" fontWeight={700}>
                  {item.label}: <Typography component="span">{item.value}</Typography>
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>

        <Box sx={{ width: { xs: "100%", md: 300 } }}>
          <Link href="/episodes" passHref style={{ width: "100%" }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{ border: "1px solid", borderColor: "black" }}
            >
              View Episodes
            </Button>
          </Link>
        </Box>
      </PageLayout>
    </Box>
  )
}

export default Home
