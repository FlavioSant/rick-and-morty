import { Button, Container, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { blueGrey } from "@mui/material/colors"

const NotFound = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h1">Oops...</Typography>
          <Typography variant="h4">404 Page not found</Typography>
          <Typography variant="body1">
            We couldn&apos;t find the page you were looking for.
          </Typography>
          <Link href="/">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ border: "1px solid", borderColor: "black", minWidth: 200, mt: 4 }}
            >
              Go back
            </Button>
          </Link>
        </Stack>

        <Stack sx={{ borderBottom: "4px solid", borderColor: blueGrey[900] }}>
          <Image src="/images/rick-not-found.png" alt="Rick Sanchez" width={250} height={400} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default NotFound
