import { CircularProgress, Stack } from "@mui/material"

const Loading = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress color="secondary" />
    </Stack>
  )
}

export default Loading
