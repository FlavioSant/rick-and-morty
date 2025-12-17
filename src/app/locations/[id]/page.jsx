import { ListCharacters, PageTitle } from "@/components"
import { getLocation } from "@/lib/services/locations"
import { getMultipleCharacters } from "@/lib/services/characters"
import { Container, Stack, Typography } from "@mui/material"
import { notFound } from "next/navigation"

const Location = async ({ params }) => {
  const { id } = await params

  const location = await getLocation(id)

  if (!location) {
    return notFound()
  }

  const residentsIds = location.residents.map((residentUrl) => residentUrl.split("/").pop())

  const residents = await getMultipleCharacters(residentsIds)

  return (
    <Container sx={{ py: 8 }}>
      <PageTitle title={location.name} titleAlign="left" />

      <Stack direction="column" spacing={1} pt={4}>
        <Typography variant="body1">
          <strong>Type:</strong> {location.type}
        </Typography>
        <Typography variant="body1">
          <strong>Dimension:</strong> {location.dimension}
        </Typography>
        <Typography variant="body1">
          <strong>Residents:</strong> {location.residents.length}
        </Typography>
      </Stack>

      <Stack direction="column" spacing={4} pt={8}>
        <Typography variant="h4">Residents</Typography>
        {residents.length > 0 ? (
          <ListCharacters characters={residents} />
        ) : (
          <Typography variant="body1">No residents found in this location.</Typography>
        )}
      </Stack>
    </Container>
  )
}

export default Location
