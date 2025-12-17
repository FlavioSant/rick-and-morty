import { Stack } from "@mui/material"
import { ListCharacters, SearchField, Select, Pagination, PageLayout } from "@/components"
import { getCharacters } from "@/lib/services/characters"
import { statusOptions, genderOptions } from "@/lib/data/characters"

const Characters = async (props) => {
  const searchParams = await props.searchParams

  const currentPage = Number(searchParams?.page) || 1

  const response = await getCharacters({
    currentPage,
    ...searchParams,
  })

  const characters = response.results

  return (
    <PageLayout title="Characters" titleAlign="left" spacing={6}>
      <Stack direction="column" spacing={6}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} width="100%">
          <SearchField placeholder="Search characters" searchKey="name" />
          <Select searchKey="status" label="Status" options={statusOptions} />
          <Select searchKey="gender" label="Gender" options={genderOptions} />
        </Stack>

        <ListCharacters characters={characters} />
      </Stack>
      <Pagination count={response?.info?.pages} />
    </PageLayout>
  )
}

export default Characters
