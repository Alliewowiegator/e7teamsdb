import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import {
    Card, CardContent, Typography, CardActions,
    Avatar, Stack, Button, IconButton, Divider
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { allHeroInfo } from '../data/heroData';

export default function CompPreview(props) {

    function getHeroPortrait(heroName) {
        let heroToReturn = allHeroInfo.find((hero) => hero.value === heroName);
        return heroToReturn.thumbnail;
    }

    return (
        <Container maxWidth='lg'>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="primary" gutterBottom>
                        {props.teamInfo.teamType}
                    </Typography>
                    <Stack direction="row" spacing={2} paddingBottom='.5rem' divider={<Divider orientation="vertical" flexItem />}>
                        {
                            props.heroes.map((hero, index) => (
                                <Avatar key={index} src={getHeroPortrait(hero.name)}></Avatar>
                            ))
                        }
                    </Stack>

                    <Typography sx={{ fontSize: 14 }} color="secondary">
                        Description
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        {props.teamInfo.teamDescription}
                    </Typography>



                </CardContent>
                <CardActions>
                    <Button size="small">View Composition</Button>
                    <IconButton
                        size='small'
                        aria-label="delete"
                        color="secondary" >
                        <LinkIcon />

                    </IconButton>
                    <Typography sx={{ fontSize: 12 }} color="secondary">
                        {props.userInfo.username}
                    </Typography>
                </CardActions>
            </Card>
        </Container>
    )
}