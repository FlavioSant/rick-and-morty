import { Stack, Typography } from "@mui/material"

const CardText = ({ icon, label, value }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      {icon && icon}
      <Typography variant="body1" color="textPrimary" fontSize={12} fontWeight={500}>
        <strong>{label}:</strong> {value}
      </Typography>
    </Stack>
  )
}

export default CardText
