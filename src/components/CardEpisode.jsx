import { CalendarMonth, Groups, SmartDisplay } from "@mui/icons-material"
import { Card, CardActionArea, CardContent, Divider, Typography } from "@mui/material"
import Link from "next/link"
import { CardText } from "."

const CardEpisode = ({ episode }) => {
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
      <Link href={`/episodes/${episode.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent sx={{ background: "white", height: "100%" }}>
            <Typography variant="h6" color="textPrimary" align="center">
              {episode.name}
            </Typography>

            <Divider sx={{ my: 1 }} />

            <CardText
              icon={<CalendarMonth fontSize="small" color="primary" />}
              label="Air date"
              value={episode.air_date}
            />
            <CardText
              icon={<SmartDisplay fontSize="small" color="info" />}
              label="Episode"
              value={episode.episode}
            />
            <CardText
              icon={<Groups fontSize="small" color="action" />}
              label="Characters"
              value={episode.characters.length}
            />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default CardEpisode
