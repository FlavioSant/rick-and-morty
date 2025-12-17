"use client"

import { InputAdornment, styled, TextField } from "@mui/material"
import { debounce } from "lodash"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search } from "@mui/icons-material"
import { green } from "@mui/material/colors"
import { useRef, useEffect, useState } from "react"

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    "&::placeholder": {
      fontSize: 14,
    },
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: green[500],
    },
  },
})

/**
 * SearchField component based on MUI TextField, styled for search usage.
 *
 * @module SearchField
 * @see {@link https://mui.com/material-ui/api/text-field/|MUI TextField API}
 *
 * @param {import("@mui/material").TextFieldProps} props - All props for the MUI TextField component.
 * @param {string} searchKey - The key for the search parameter.
 */
const SearchField = ({ searchKey, ...props }) => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [value, setValue] = useState(searchParams.get(searchKey)?.toString() || "")
  const previousUrlValueRef = useRef(searchParams.get(searchKey)?.toString() || "")
  const pendingValueRef = useRef(null) // Track the value that will be written to URL

  /**
   * Sync the value with the URL when the URL changes externally (not from user typing).
   */
  useEffect(() => {
    const urlValue = searchParams.get(searchKey)?.toString() || ""

    /** Only sync from URL if the URL value changed from what we last saw */
    if (urlValue !== previousUrlValueRef.current) {
      /** If the URL value matches our pending value, it's our own update - just update the refs */
      if (urlValue === pendingValueRef.current) {
        pendingValueRef.current = null // Clear pending since it's now in URL
        previousUrlValueRef.current = urlValue
      } else if (pendingValueRef.current === null) {
        /** No pending update - this is an external change, sync from URL */
        setValue(urlValue)
        previousUrlValueRef.current = urlValue
      }
    }
  }, [searchParams, searchKey])

  const debouncedUpdateSearchQuery = debounce((nextValue) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString())

    if (nextValue) {
      urlSearchParams.set(searchKey, nextValue)
      urlSearchParams.set("page", 1)
    } else {
      urlSearchParams.delete(searchKey)
    }

    const queryString = urlSearchParams.toString()
    const updatedPath = `${pathname}?${queryString}`

    replace(updatedPath)
    /** Don't clear pendingValueRef here - let useEffect clear it when URL actually updates */
  }, 300)

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    /** Track what we're about to write to the URL (before debounce fires) */
    pendingValueRef.current = newValue || null
    debouncedUpdateSearchQuery(newValue)
  }

  return (
    <StyledTextField
      id={`${searchKey}-search`}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      onChange={handleChange}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment>
              <Search sx={{ mr: 1 }} />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  )
}

export default SearchField
