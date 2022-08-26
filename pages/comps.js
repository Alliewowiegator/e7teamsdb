import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Card, CardContent, Typography,
    InputLabel, Select, OutlinedInput,
    Box, Chip, MenuItem, FormControl,
    IconButton, CardActions, Button, Paper, Avatar, Divider
} from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';
import CompPreview from '../components/CompPreview';



const Comps = ({ compData }) => {
    return (
        <Container maxWidth='lg'>
            <Grid2 container spacing={3} paddingTop='2rem' columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
                <Grid2 item xs={4} md={12}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                                Team Compositions
                            </Typography>
                            <Typography variant='body1'>
                                This will allow you to find team compositions that fit your need. Whether it be based on a unit, content type, or blah blah blah.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item md={12}>

                </Grid2>
                <Grid2 item xs={4} md={12}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                                Team Compositions
                            </Typography>
                            <Grid2 container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
                                <Grid2 item md={3} xs={4} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-multiple-chip-label">Filter By Content</InputLabel>
                                        <Select
                                            labelId="demo-multiple-chip-label"
                                            id="demo-multiple-chip"
                                            input={<OutlinedInput id="select-multiple-chip" label="Filter By Content" />}

                                        >
                                            <MenuItem value={'wyvern'}>Wyvern</MenuItem>
                                            <MenuItem value={'banshee'}>Banshee</MenuItem>
                                            <MenuItem value={'golem'}>Golem</MenuItem>
                                            <MenuItem value={'guildWarDefense'}>Guild War Defense</MenuItem>
                                            <MenuItem value={'guildwarOffense'}>Guild War Offense</MenuItem>
                                            <MenuItem value={'arenaDefense'}>Arena Defense</MenuItem>
                                            <MenuItem value={'arenaOffense'}>Arena Offense</MenuItem>
                                            <MenuItem value={'rta'}>RTA</MenuItem>
                                            <MenuItem value={'abyss'}>Abyss</MenuItem>
                                            <MenuItem value={'adventure'}>Adventure</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid2>
                                <Grid2 item md={3} xs={4}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-multiple-chip-label">Filter By Hero</InputLabel>
                                        <Select
                                            labelId="demo-multiple-chip-label"
                                            id="demo-multiple-chip"
                                            multiple
                                            input={<OutlinedInput id="select-multiple-chip" label="Filter By Hero" />}
                                            renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {selected.map((value) => (
                                                        <Chip key={value} label={value} />
                                                    ))}
                                                </Box>
                                            )}
                                        >
                                        </Select>
                                    </FormControl>
                                </Grid2>
                                <Grid2 item md={3} xs={4}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-multiple-chip-label">Filter By Something</InputLabel>
                                        <Select
                                            labelId="demo-multiple-chip-label"
                                            id="demo-multiple-chip"
                                            multiple
                                            input={<OutlinedInput id="select-multiple-chip" label="Filter By Something" />}
                                        >
                                        </Select>
                                    </FormControl>
                                </Grid2>
                                <Grid2 item md={1} mdOffset={2} xsOffset={1.70}>
                                    <IconButton
                                        size='large'
                                        aria-label="delete"
                                        color="success">
                                        <RefreshIcon />
                                    </IconButton>
                                </Grid2>
                                <Grid2 item md={12} xs={4}>
                                    <Divider />
                                </Grid2>
                                <Grid2 container spacing={3} md={12} xs={4} paddingTop='2rem' columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
                                    {
                                        compData.map((hero, index) => (
                                            <Grid2 key={index} item md={4} xs={4}>
                                                <CompPreview {...hero}></CompPreview>
                                            </Grid2>
                                        ))
                                    }
                                </Grid2>
                            </Grid2>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Container>
    )
}
    

Comps.getInitialProps = async () => {
    let fetchUrl = '';
    (process.env.NODE_ENV ) ? fetchUrl = 'http://localhost:3000/api/allComps' : fetchUrl = 'https://e7teamsdb.herokuapp.com/api/allComps'
    const res = await fetch(fetchUrl);
    const { data } = await res.json();

    return { compData: data };
}

export default Comps;