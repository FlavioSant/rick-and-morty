import { CharacterStatus, ListEpisodes } from "@/components"
import { Gender } from "@/components/gender"
import { getCharacter } from "@/lib/services/characters"
import { getMultipleEpisodes } from "@/lib/services/episodes"
import { Launch } from "@mui/icons-material"
import { Box, Container, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const Character = async ({ params }) => {
  const { id } = await params

  const character = await getCharacter(id)

  if (!character) {
    return notFound()
  }

  const locationId = character.location.url.split("/").pop()

  const episodesIds = character.episode.map((episodeUrl) => episodeUrl.split("/").pop())

  const episodes = await getMultipleEpisodes(episodesIds)

  return (
    <Container sx={{ py: 8 }}>
      <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={8} width="100%">
        <Box
          sx={{
            borderRadius: 999,
            border: "3px solid",
            borderColor: "secondary.main",
            overflow: "hidden",
            position: "relative",
            width: 350,
            height: 350,
          }}
        >
          <Image src={character.image} alt={character.name} fill />
        </Box>

        <Stack direction="column" spacing={1} sx={{ width: "fit-content" }}>
          <Typography variant="h4">{character.name}</Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ backgroundColor: "secondary.main", width: "100%", height: 2 }} />
            <Box
              sx={{ backgroundColor: "primary.main", borderRadius: 999, width: 12, height: 6 }}
            />
            <Box sx={{ backgroundColor: "secondary.main", width: "100%", height: 2 }} />
          </Stack>

          <Typography variant="body1" pt={2}>
            <strong>Status:</strong> <CharacterStatus component="span" status={character.status} />
          </Typography>
          <Typography variant="body1">
            <strong>Species:</strong> {character.species}
          </Typography>
          <Gender.Root>
            <Gender.Label fontSize={16}>
              <strong>Gender:</strong> {character.gender}
            </Gender.Label>
            <Gender.Icon gender={character.gender} />
          </Gender.Root>
          <Typography variant="body1">
            <strong>Origin:</strong> {character.origin.name}
          </Typography>
          <Typography variant="body1">
            <strong>Episodes:</strong> {character.episode.length}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              transition: "color 0.3s ease",
              textDecoration: "none",
              ":hover": { color: "primary.main" },
            }}
          >
            <Link
              href={`/locations/${locationId}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <strong>Location:</strong> {character.location.name}{" "}
              <Launch sx={{ color: "primary.main", fontSize: 16, verticalAlign: "middle" }} />
            </Link>
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="column" spacing={4} pt={8}>
        <Typography variant="h4">Episodes</Typography>
        {episodes.length > 0 ? (
          <ListEpisodes episodes={episodes} />
        ) : (
          <Typography variant="body1">No episodes found for this character.</Typography>
        )}
      </Stack>
    </Container>
  )
}

export default Character
