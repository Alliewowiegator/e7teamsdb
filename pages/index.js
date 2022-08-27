import React from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  CardContent,
  Card,
  Button,
  Typography,
  Link as MUILink,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import CompPreview from "./compspreview";

export default function Home() {

  let testData = {
    "_id": "630955d5bdf7c3901f48c2dd",
    "userInfo": {
        "username": "Allie",
        "server": "Global",
        "_id": "630955d5bdf7c3901f48c2de"
    },
    "teamInfo": {
        "teamType": "Banshee",
        "teamDescription": "Simple Banshee one-shot team",
        "_id": "630955d5bdf7c3901f48c2df"
    },
    "heroes": [
        {
            "id": "430a8583-5f93-4bca-8938-189dee07e425",
            "ringStat": "",
            "bootStat": "",
            "name": "Shadow Rose",
            "power": null,
            "attack": null,
            "defense": null,
            "health": null,
            "speed": null,
            "criticalHitChance": null,
            "criticalHitDamage": null,
            "effectiveness": null,
            "effectResistance": null,
            "dualAttackChance": null,
            "_id": "630955d5bdf7c3901f48c2e0"
        },
        {
            "id": "7846218f-6fd0-4c53-bd6a-695d6132d61e",
            "ringStat": "",
            "bootStat": "",
            "name": "Baiken",
            "power": null,
            "attack": null,
            "defense": null,
            "health": null,
            "speed": null,
            "criticalHitChance": null,
            "criticalHitDamage": null,
            "effectiveness": null,
            "effectResistance": null,
            "dualAttackChance": null,
            "_id": "630955d5bdf7c3901f48c2e1"
        },
        {
            "id": "0397a062-da9d-457a-b239-f0962b970699",
            "ringStat": "",
            "bootStat": "",
            "name": "Charles",
            "power": null,
            "attack": null,
            "defense": null,
            "health": null,
            "speed": null,
            "criticalHitChance": null,
            "criticalHitDamage": null,
            "effectiveness": null,
            "effectResistance": null,
            "dualAttackChance": null,
            "_id": "630955d5bdf7c3901f48c2e2"
        },
        {
            "id": "c86b7375-4bc8-4173-949d-175ce839b94b",
            "ringStat": "",
            "bootStat": "",
            "name": "Pavel",
            "power": null,
            "attack": null,
            "defense": null,
            "health": null,
            "speed": null,
            "criticalHitChance": null,
            "criticalHitDamage": null,
            "effectiveness": null,
            "effectResistance": null,
            "dualAttackChance": null,
            "_id": "630955d5bdf7c3901f48c2e3"
        }
    ],
    "__v": 0
}

  return (
    <Container maxWidth="lg">
      <CompPreview {...testData} />
      <Grid2
        container
        spacing={3}
        paddingTop="2rem"
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        <Grid2 item xs={4} md={6}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                What is E7 Teams DB?
              </Typography>
              <Typography variant="body1">
                Epic 7 Team Share is a website that allows you to create or view
                team compositions submitted by other users. Submitted teams
                contain all of the heroes stats that allow you to check and
                match to your own.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={4} md={6}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                What&apos;s the point?
              </Typography>
              <Typography variant="body1">
                Sharing and finding team compositions for certain content can be
                difficult at times. You are able to search based on content
                type, composition heroes, or stats to help condense the database
                down to what you need.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={4} md={5} mdOffset={1}>
          <Card>
            <CardMedia
              component="img"
              height="275"
              image="/static/images/example-comp.png"
              alt="example composition"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                What to Expect
              </Typography>
              <Typography variant="body1">
                When viewing all of the submitted compositions, you will be
                given small previews of each one available. This includes the
                type of content it is for, the heroes in it, description
                provided by the submitter, and their username.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
