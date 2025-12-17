import { Typography } from "@mui/material"
import { CardEpisode, ListContainer } from "."

const ListEpisodes = ({ episodes }) => {
  const hasEpisodes = episodes.length > 0

  return (
    <ListContainer>
      {hasEpisodes ? (
        episodes.map((episode) => <CardEpisode key={episode.id} episode={episode} />)
      ) : (
        <Typography variant="h6" color="white">
          No episodes found.
        </Typography>
      )}
    </ListContainer>
  )
}

export default ListEpisodes
