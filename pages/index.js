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

export default function Home() { 
  return (
    <Container maxWidth="lg">
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
