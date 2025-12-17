import { ListCharacters, PageTitle } from "@/components"
import { getEpisode } from "@/lib/services/episodes"
import { getMultipleCharacters } from "@/lib/services/characters"
import { Container, Stack, Typography } from "@mui/material"
import { notFound } from "next/navigation"

const Episode = async ({ params }) => {
  const { id } = await params

  const episode = await getEpisode(id)

  if (!episode) {
    return notFound()
  }

  const charactersIds = episode.characters.map((characterUrl) => characterUrl.split("/").pop())

  const characters = await getMultipleCharacters(charactersIds)

  return (
    <Container sx={{ py: 8 }}>
      <PageTitle title={episode.name} titleAlign="left" />

      <Stack direction="column" spacing={1} pt={4}>
        <Typography variant="body1">
          <strong>Air date:</strong> {episode.air_date}
        </Typography>
        <Typography variant="body1">
          <strong>Episode:</strong> {episode.episode}
        </Typography>
        <Typography variant="body1">
          <strong>Characters:</strong> {episode.characters.length}
        </Typography>
      </Stack>

      <Stack direction="column" spacing={4} pt={8}>
        <Typography variant="h4">Characters</Typography>
        {characters.length > 0 ? (
          <ListCharacters characters={characters} />
        ) : (
          <Typography variant="body1">No characters found in this episode.</Typography>
        )}
      </Stack>
    </Container>
  )
}

export default Episode
