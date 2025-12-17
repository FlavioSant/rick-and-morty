import { PageLayout, SearchField } from "@/components"
import ListLocations from "@/components/ListLocations"
import Pagination from "@/components/Pagination"
import { getLocations } from "@/lib/services/locations"
import { Box, Stack } from "@mui/material"
import { blueGrey } from "@mui/material/colors"

const Locations = async (props) => {
  const searchParams = await props.searchParams

  const currentPage = Number(searchParams?.page) || 1

  const response = await getLocations({ currentPage, ...searchParams })

  const locations = response.results

  return (
    <PageLayout title="Locations" titleAlign="left" spacing={6}>
      <Stack direction="column" spacing={6}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} width="100%">
          <SearchField placeholder="Search location name" searchKey="name" />
          <SearchField placeholder="Search location type" searchKey="type" />
          <SearchField placeholder="Search location dimension" searchKey="dimension" />
        </Stack>

        <ListLocations locations={locations} />
      </Stack>
      <Pagination count={response?.info?.pages} />
    </PageLayout>
  )
}

export default Locations
