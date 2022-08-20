import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import { CardContent, Card, Button, Typography, Link } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={3} paddingTop='2rem' columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
        <Grid2 item xs={4} md={6}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                What is E7 Team Share?
              </Typography>
              <Typography variant='body1'>
                Epic 7 Team Share is a website that allows you to create or view team compositions submitted by other users.
                Submitted teams contain all of the heroes stats that allow you to check and match to your own.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={4} md={6}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                What's the point?
              </Typography>
              <Typography variant='body1'>
                Sharing and finding team compositions for certain content can be difficult at times.
                You are able to search based on content type, composition heroes, or stats to help condense the database down to what you need.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={4} md={8} mdOffset={2}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                Quick Actions
              </Typography>
              <Typography variant='body1'>
                Quickly create and submit a team composition <Link href="/teamform">here</Link>, or click <Link href="/create">here</Link> to view the database.
                Feedback can be submitted <Link href="/create">here</Link> for any suggestions for changes or improvements.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  )
}
