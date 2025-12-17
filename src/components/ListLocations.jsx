import { Typography } from "@mui/material"
import { CardLocation, ListContainer } from "."

const ListLocations = ({ locations }) => {
  const hasLocations = locations.length > 0

  return (
    <ListContainer>
      {hasLocations ? (
        locations.map((location) => <CardLocation key={location.id} location={location} />)
      ) : (
        <Typography variant="h6" color="white">
          No locations found.
        </Typography>
      )}
    </ListContainer>
  )
}

export default ListLocations
