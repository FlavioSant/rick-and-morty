import { Typography } from "@mui/material"

import { CardCharacter, ListContainer } from "."

const ListCharacters = ({ characters }) => {
  const hasCharacters = characters.length > 0

  return (
    <ListContainer>
      {hasCharacters ? (
        characters.map((character) => <CardCharacter key={character.id} character={character} />)
      ) : (
        <Typography variant="h6" color="white">
          No characters found.
        </Typography>
      )}
    </ListContainer>
  )
}

export default ListCharacters
