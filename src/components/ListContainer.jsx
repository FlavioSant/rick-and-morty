import { Box, Stack } from "@mui/material"
import { blueGrey } from "@mui/material/colors"

const ListContainer = ({ children }) => {
  return (
    <Box
      bgcolor={blueGrey[900]}
      sx={{ border: "8px solid", borderColor: "secondary.main", borderRadius: 8, px: 2, py: 5 }}
    >
      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={4}>
        {children}
      </Stack>
    </Box>
  )
}

export default ListContainer
