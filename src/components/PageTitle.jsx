import { Box, Stack, Typography } from "@mui/material"

const PageTitle = ({ title, titleAlign = "center" }) => {
  return (
    <Stack direction="column" spacing={1} alignItems={titleAlign}>
      <Typography variant="h4" textAlign={titleAlign}>
        {title}
      </Typography>
      <Box sx={{ backgroundColor: "primary.main", width: 100, height: 6, borderRadius: "2px" }} />
      <Box sx={{ backgroundColor: "secondary.main", width: 80, height: 4, borderRadius: "2px" }} />
    </Stack>
  )
}

export default PageTitle
