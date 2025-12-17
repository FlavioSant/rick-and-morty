import { getCharacterStatusColor } from "@/lib/utils/getStatusBadgeColor"
import { Chip } from "@mui/material"

/**
 * CharacterStatus component based on MUI Chip, styled for character status usage.
 *
 * @module CharacterStatus
 * @see {@link https://mui.com/material-ui/api/chip/|MUI Chip API}
 *
 * @param {import("@mui/material").ChipProps} props - All props for the MUI Chip component.
 */
const CharacterStatus = ({ status, ...props }) => {
  const color = getCharacterStatusColor(status.toLowerCase())

  return (
    <Chip
      label={status}
      size="small"
      color={color}
      sx={{ fontSize: 12, fontWeight: 600, height: "max-content" }}
      {...props}
    />
  )
}

export default CharacterStatus
