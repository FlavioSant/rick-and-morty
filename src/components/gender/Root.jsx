import { Stack } from "@mui/material"

const GenderRoot = ({ children, ...props }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5} {...props}>
      {children}
    </Stack>
  )
}

export default GenderRoot
