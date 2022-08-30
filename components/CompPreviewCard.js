import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import {
    Card, CardContent, Typography, CardActions,
    Avatar, Stack, Button, IconButton, Divider, CardHeader
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { allHeroInfo } from '../data/heroData';

export default function CompPreviewCard(props) {

    function getHeroPortrait(heroName) {
        let heroToReturn = allHeroInfo.find((hero) => hero.value === heroName);
        return heroToReturn.image;
    }

    return (
        <Container maxWidth='lg'>
            <Card sx= {{ backgroundColor: '#1e1e1e' }}>
                <CardHeader 
                    title={props.teamInfo.teamType}
                    subheader={props.teamInfo.teamDescription}
                    sx={{ color: "#D46F94" }}
                    titleTypographyProps={{ fontSize: 17 }}
                />
                <CardContent>
                    <Stack direction="row" justifyContent="center" spacing={1} paddingBottom='.5rem' divider={<Divider orientation="vertical" flexItem />}>
                        {
                            props.heroes.map((hero, index) => (
                                <Avatar key={index} src={getHeroPortrait(hero.name)}></Avatar>
                            ))
                        }
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ color: "#D46F94" }} onClick={() => props.openCompModal(props._id)}>View Composition</Button>
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