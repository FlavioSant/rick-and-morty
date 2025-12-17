import { Groups, Public, RocketLaunch } from "@mui/icons-material"
import { Card, CardActionArea, CardContent, Divider, Typography } from "@mui/material"
import Link from "next/link"
import { CardText } from "."

const CardLocation = ({ location }) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        borderRadius: 8,
        borderBottom: "4px solid",
        borderColor: "secondary.main",
        boxShadow: "none",
        width: 244,
        minHeight: 180,
      }}
    >
      <Link href={`/locations/${location.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent sx={{ background: "white", height: "100%" }}>
            <Typography variant="h6" color="textPrimary" align="center">
              {location.name}
            </Typography>

            <Divider sx={{ my: 1 }} />

            <CardText
              icon={<Public fontSize="small" color="primary" />}
              label="Type"
              value={location.type}
            />
            <CardText
              icon={<RocketLaunch fontSize="small" color="info" />}
              label="Dimension"
              value={location.dimension}
            />
            <CardText
              icon={<Groups fontSize="small" color="action" />}
              label="Residents"
              value={location.residents.length}
            />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default CardLocation
