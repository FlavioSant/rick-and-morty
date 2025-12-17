import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material"
import Link from "next/link"
import { CardText, CharacterStatus } from "."
import { Gender } from "./gender"
import { LocationOn, Man2, Public } from "@mui/icons-material"

const CardCharacter = ({ character }) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        borderRadius: 8,
        borderBottom: "4px solid",
        borderColor: "secondary.main",
        boxShadow: "none",
        maxWidth: 252,
      }}
    >
      <Link href={`/characters/${character.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <Box sx={{ px: 1 }}>
            <CardMedia
              component="img"
              image={character.image}
              alt={character.name}
              sx={{
                border: "3px solid",
                borderColor: "secondary.main",
                borderRadius: 999,
                position: "relative",
              }}
            />
          </Box>
          <CardContent
            sx={{
              background: "white",
              borderRadius: 8,
              mt: -16,
              pt: 18,
              height: "100%",
            }}
          >
            <Stack direction="column" alignItems="center">
              <Typography variant="h6" color="textPrimary" align="center">
                {character.name}
              </Typography>
              <Stack direction="row" justifyContent="space-between" gap={0.5} width="100%">
                <CharacterStatus status={character.status} />
                <Gender.Root>
                  <Gender.Icon gender={character.gender} />
                  <Gender.Label color="textSecondary" fontSize={12} fontWeight={500}>
                    {character.gender}
                  </Gender.Label>
                </Gender.Root>
              </Stack>
            </Stack>

            <Divider sx={{ my: 1 }} />

            <Stack direction="column" justifyContent="space-between" gap={0.5}>
              <CardText
                icon={<Man2 fontSize="small" color="primary" />}
                label="Species"
                value={character.species}
              />
              <CardText
                icon={<LocationOn fontSize="small" color="info" />}
                label="Location"
                value={character.location.name}
              />
              <CardText
                icon={<Public fontSize="small" color="action" />}
                label="Origin"
                value={character.origin.name}
              />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default CardCharacter
