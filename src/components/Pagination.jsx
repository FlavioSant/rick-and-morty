"use client"

import { Pagination as MuiPagination, Stack } from "@mui/material"
import { usePathname, useRouter } from "next/navigation"

const Pagination = ({ count }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (event, value) => {
    router.push(`${pathname}?page=${value}`)
  }

  return (
    <Stack direction="row" justifyContent="center" spacing={2} pt={4}>
      <MuiPagination count={count || 1} shape="rounded" onChange={handleChange} />
    </Stack>
  )
}

export default Pagination
