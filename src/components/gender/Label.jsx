import { Typography } from "@mui/material"

/**
 * GenderLabel component based on MUI Typography, styled for gender usage.
 *
 * @module GenderLabel
 * @see {@link https://mui.com/material-ui/api/typography/|MUI Typography API}
 *
 * @param {import("@mui/material").TypographyProps} props - All props for the MUI Typography component.
 */
const GenderLabel = ({ children, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  )
}

export default GenderLabel
