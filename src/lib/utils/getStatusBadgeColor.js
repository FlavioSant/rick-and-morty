import { CHARACTER_STATUS } from "@/lib/constants/characterStatus"

export const getCharacterStatusColor = (status) => {
  switch (status) {
    case CHARACTER_STATUS.ALIVE:
      return "success"
    case CHARACTER_STATUS.DEAD:
      return "error"
    case CHARACTER_STATUS.UNKNOWN:
      return "warning"
  }
}
