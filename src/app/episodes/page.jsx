import { PageLayout, SearchField } from "@/components"
import ListEpisodes from "@/components/ListEpisodes"
import Pagination from "@/components/Pagination"
import { getEpisodes } from "@/lib/services/episodes"
import { Box, Stack } from "@mui/material"
import { blueGrey } from "@mui/material/colors"

const Episodes = async (props) => {
  const searchParams = await props.searchParams

  const currentPage = Number(searchParams?.page) || 1

  const response = await getEpisodes({ currentPage, ...searchParams })

  const episodes = response.results

  return (
    <PageLayout title="Episodes" titleAlign="left" spacing={6}>
      <Stack direction="column" spacing={6}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} width="100%">
          <SearchField placeholder="Search episode name" searchKey="name" />
          <SearchField placeholder="Search episode code" searchKey="episode" />
        </Stack>

        <ListEpisodes episodes={episodes} />
      </Stack>
      <Pagination count={response?.info?.pages} />
    </PageLayout>
  )
}

export default Episodes
