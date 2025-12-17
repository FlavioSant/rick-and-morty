import { Container, Stack } from "@mui/material"
import { PageTitle, GoToTopButton } from "."

const PageLayout = ({ children, title, titleAlign, alignItems, spacing = 12 }) => {
  return (
    <Container>
      <Stack
        direction="column"
        spacing={spacing}
        alignItems={alignItems}
        sx={{ py: 8, px: { xs: 2, md: 0 } }}
      >
        {title && <PageTitle title={title} titleAlign={titleAlign} />}
        {children}
        <GoToTopButton />
      </Stack>
    </Container>
  )
}

export default PageLayout
