"use client"

import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material"
import { green } from "@mui/material/colors"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

/**
 * Select input component based on MUI Select.
 *
 * @module Select
 * @see {@link https://mui.com/material-ui/api/select/|MUI Select API}
 *
 * @param {import("@mui/material").SelectProps} props - All props for the MUI Select component, plus:
 * @param {string} props.searchKey - The id and URL query key for the select.
 * @param {string} props.label - The field label.
 * @param {Array<{label: string, value: string}>} props.options - The select options.
 */

const Select = ({ searchKey, label, options, ...props }) => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  /** Derive value directly from URL search params */
  const value = searchParams.get(searchKey) || ""

  const handleChange = (event) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    const newValue = event.target.value

    if (newValue) {
      urlSearchParams.set(searchKey, newValue)
    } else {
      urlSearchParams.delete(searchKey)
    }

    const queryString = urlSearchParams.toString()
    const updatedPath = `${pathname}?${queryString}`

    replace(updatedPath)
  }

  return (
    <FormControl size="small" fullWidth>
      {label && (
        <InputLabel id={`${searchKey}-label`} sx={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 14 }}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        labelId={`${searchKey}-label`}
        id={searchKey}
        value={value}
        label={label}
        onChange={handleChange}
        fullWidth
        sx={{
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: green[500],
          },
        }}
        {...props}
      >
        <MenuItem value="" sx={{ fontSize: 14 }}>
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{ fontSize: 14 }}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
