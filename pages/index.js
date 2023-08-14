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
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>E7 Teams DB</title>
        <meta name='description' content='Database for team Compositions in Epic Seven' />
      </Head>
      <Grid2
        container
        spacing={1}
        paddingTop="2rem"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid2 item xs={4} md={6}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
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
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
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
        <Grid2 item xs={4} md={6}>
          <Card sx={{ minHeight: '28rem'}}>
            <CardMedia
              component="img"
              height="275"
              image="../example-comp.png"
              alt="example composition"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
                Composition Previews
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
        <Grid2 item xs={4} md={6}>
          <Card sx={{ minHeight: '28rem'}}>
            <CardMedia
              component="img"
              height="275"
              image="/example-comp-view.png"
              alt="example composition"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
                Viewing a Composition
              </Typography>
              <Typography variant="body1">
                When you click to view a desired composition, you will be shown a more in-depth view.
                This will show you individual stats for each hero, their accessory main stats, and selected artifact.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={4} md={10} mdOffset={1}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
                Development Notes
              </Typography>
              <Typography variant="body1">
                The website is actively being worked on. Everything is currently subject to change. I am actively working on improvements.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={4} md={10} mdOffset={1}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
                Disclaimer
              </Typography>
              <Typography variant="body1">
                This website is NOT affiliated with Epic Seven or Smilegate by any means, this is a FANMADE website dedicated to the game.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
