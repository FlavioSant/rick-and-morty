import { Female, HelpOutline, Male, Transgender } from "@mui/icons-material"
import { blue, brown, grey, pink } from "@mui/material/colors"

export const GENDER_ICON_MAP = {
  Male: Male,
  Female: Female,
  Genderless: HelpOutline,
  unknown: Transgender,
}

export const GENDER_COLOR_MAP = {
  Male: blue[500],
  Female: pink[500],
  Genderless: grey[500],
  unknown: brown[500],
}

const GenderIcon = ({ gender, fontSize = 18, ...props }) => {
  const IconComponent = GENDER_ICON_MAP[gender]

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent sx={{ color: GENDER_COLOR_MAP[gender], fontSize, ...props.sx }} {...props} />
  )
}

export default GenderIcon
