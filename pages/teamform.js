import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import { v4 as uuidv4 } from 'uuid';
import {
    CardContent, Card, Button, TextField, MenuItem, FormControl,
    InputLabel, Select, Typography, IconButton, Fade, Paper, ButtonGroup, CircularProgress, Backdrop, Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { allHeroInfo } from '../data/heroData'
import { useEffect, useState } from 'react';
import HeroEditModal from '../components/HeroEditModal';

export default function TeamForm() {
    // State variables
    const [successfulSubmission, setSuccessfulSubmission] = useState(false);
    const [submission, setSubmission] = useState(false);
    const [heroToEdit, setEditHero] = useState({})
    const [heroes, setHeroes] = useState([]);
    const [open, setOpen] = useState(false);
    const [userInformation, setUserInformation] = useState([{
        username: "",
        server: "",
    }])

    const [teamInfo, setTeamInfo] = useState({
        teamType: "",
        teamDescription: ""
    })

    const [initialHero, setInitialHero] = useState([{
        necklaceStat: '',
        ringStat: '',
        bootStat: '',
        name: '',
        power: '',
        attack: '',
        defense: '',
        health: '',
        speed: '',
        criticalHitChance: '',
        criticalHitDamage: '',
        effectiveness: '',
        effectResistance: '',
        dualAttackChance: '',
    }])



    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    async function heroBuilder() {
        let heroObject = {
            "heroes": [{
                id: uuidv4(),
                necklaceStat: initialHero[0].necklaceStat,
                ringStat: initialHero[0].ringStat,
                bootStat: initialHero[0].bootStat,
                name: initialHero[0].name,
                power: initialHero[0].power,
                attack: initialHero[0].attack,
                defense: initialHero[0].defense,
                health: initialHero[0].health,
                speed: initialHero[0].speed,
                criticalHitChance: initialHero[0].criticalHitChance,
                criticalHitDamage: initialHero[0].criticalHitDamage,
                effectiveness: initialHero[0].effectiveness,
                effectResistance: initialHero[0].effectResistance,
                dualAttackChance: initialHero[0].dualAttackChance,
            }]
        };

        for (const hero of heroes) {
            heroObject.heroes.push({
                id: hero.id,
                necklaceStat: hero.necklaceStat,
                ringStat: hero.ringStat,
                bootStat: hero.bootStat,
                name: hero.name,
                power: hero.power,
                attack: hero.attack,
                defense: hero.defense,
                health: hero.health,
                speed: hero.speed,
                criticalHitChance: hero.criticalHitChance,
                criticalHitDamage: hero.criticalHitDamage,
                effectiveness: hero.effectiveness,
                effectResistance: hero.effectResistance,
                dualAttackChance: hero.dualAttackChance,
            })
        }

        return heroObject;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmission(true);
        const heroesObject = await heroBuilder();

        setTimeout(() => {
            const newTeam = {
                "userInfo": {
                    "username": userInformation.username,
                    "server": userInformation.server
                },
                "teamInfo": {
                    "teamType": teamInfo.teamType,
                    "teamDescription": teamInfo.teamDescription
                },
                "heroes": heroesObject.heroes
            }
            setSubmission(false);

            setSuccessfulSubmission(true);  
            console.log(newTeam);
            setTimeout(() => {
                setSuccessfulSubmission(false);
            }, 5000)
        }, 2000)
    }

    useEffect(() => {
        const alert = document.getElementById('submission-alert');
        if (alert) {
            alert.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }

        return () => {
            console.log('Cleanup')
        }
    })

    useEffect(() => {
        const heroIndex = heroes.length - 1;
        if (heroIndex >= 0) {
            let hero = heroes[heroIndex].id
            const heroElement = document.getElementById(`${hero}`);
            heroElement.scrollIntoView({ block: 'center' ,behavior: 'smooth' })
        }

        return () => {
            console.log('Cleanup');
        }
    }, [heroes])

    function openEditModal(heroId) {
        let heroToEdit;
        (heroId) ? heroToEdit = heroes.find(hero => hero.id === heroId) : heroToEdit = initialHero[0];
        setEditHero({ ...heroToEdit })
        handleOpen(true);
    }


    const handleInputChange = (e, heroId) => {
        const { name, value } = e.target;

        if (heroId) {
            const heroIndex = heroes.findIndex(hero => hero.id === heroId);
            let heroArray = heroes;
            heroArray[heroIndex][name] = value;
            setHeroes([...heroArray]);
        } else {
            let heroArray = initialHero
            heroArray[0][name] = value;
            setInitialHero([...heroArray]);
        }
    };

    const removeHero = (heroToRemove) => {
        setHeroes(heroes.filter(hero => hero.id !== heroToRemove));
    };

    return (
        <Container maxWidth="lg">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={submission}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>


            <HeroEditModal open={open} {...heroToEdit} handleClose={handleClose} handleInputChange={handleInputChange} />
            <Grid2 container spacing={3} paddingTop='2rem' columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
                {successfulSubmission ? (
                    <Fade in={successfulSubmission}>
                        <Grid2 item xs={4} md={12}>
                            <Alert severity="success" variant='outlined' id="submission-alert">Submission Successfully Saved in The Database!</Alert>
                        </Grid2>
                    </Fade>
                ) : null}

                <Grid2 item xs={4} md={6}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                                How Does This Work?
                            </Typography>
                            <Typography variant='body1'>
                                The form below allows you to enter information about your team. What sort of content it is for, what heroes, and allows you to personalize the stats of each invidual hero.
                                Add heroes as needed.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={4} md={6}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                                What Happens After Submitting?
                            </Typography>
                            <Typography variant='body1'>
                                After a successful submission, you&apos;ll be given a URL to view your team directly, or can view it in the database.
                                The URL can be shared with others or linked in places for reuse.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={4} md={5} mdOffset={1}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 17, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                User Information
                            </Typography>
                        </CardContent>
                        <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid2 item xs={12}>
                                <TextField fullWidth label="Username" variant="standard" onChange={(e) => setUserInformation(({ ...userInformation, username: e.target.value }))} />
                            </Grid2>
                            <Grid2 item xs={12}>
                                <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                                    <InputLabel id="user-server">Server</InputLabel>
                                    <Select
                                        labelId="user-server"
                                        id="userServer"
                                        label="Server"
                                        variant='standard'
                                        onChange={(e) => setUserInformation(({ ...userInformation, server: e.target.value }))}
                                    >
                                        <MenuItem value={'global'}>Global</MenuItem>
                                        <MenuItem value={'korea'}>KR</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid2>
                        </Grid2>
                    </Card>
                </Grid2>
                <Grid2 item xs={4} md={5}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 17, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                Team Information
                            </Typography>
                        </CardContent>
                        <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid2 item xs={12}>
                                <TextField fullWidth label="Team Description" variant="standard" onChange={(e) => setTeamInfo(({ ...teamInfo, teamDescription: e.target.value }))} />
                            </Grid2>
                            <Grid2 item xs={12}>
                                <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                                    <InputLabel id="team-type">Team Type</InputLabel>
                                    <Select
                                        labelId="team-type"
                                        id="teamType"
                                        label="Team Type"
                                        variant='standard'
                                        onChange={(e) => setTeamInfo(({ ...teamInfo, teamType: e.target.value }))}
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
                        </Grid2>

                    </Card>
                </Grid2>
                <Grid2 item xs={8} md={10} mdOffset={1}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 17, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                Hero Information
                            </Typography>
                        </CardContent>
                        <Grid2 container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid2 item xs={12} md={3}>
                                <Card>
                                    <Grid2 container spacing={1}>
                                        <Grid2 item xs={8}>
                                            <FormControl fullWidth variant="standard">
                                                <InputLabel id="hero-name">Hero</InputLabel>
                                                <Select
                                                    labelId="hero-name"
                                                    id="heroName1"
                                                    label="Hero Name"
                                                    variant='standard'
                                                    name='name'
                                                    onChange={(e) => handleInputChange(e)}
                                                >
                                                    {allHeroInfo.map((heroInfo, index) => (
                                                        <MenuItem key={index} value={heroInfo.value}>{heroInfo.viewValue}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 item xs={1} xsOffset={1} mdOffset={1} paddingTop='16px'>
                                            <IconButton
                                                disabled={!initialHero[0].name}
                                                aria-label="delete"
                                                onClick={() => openEditModal()}
                                                color="secondary" >
                                                <EditIcon />
                                            </IconButton>
                                        </Grid2>
                                    </Grid2>
                                </Card>
                            </Grid2>
                            <>
                                {
                                    heroes.map(
                                        (heroData, index) => (
                                            <Grid2 item xs={12} md={3} key={index}>
                                                <Fade in={heroData}>
                                                    <Card key={heroData.id} id={heroData.id}>
                                                        <Grid2 container spacing={1}>
                                                            <Grid2 item xs={8}>

                                                                <FormControl fullWidth variant="standard">
                                                                    <InputLabel id="hero-name">Hero</InputLabel>
                                                                    <Select
                                                                        labelId="hero-name"
                                                                        id={`heroName${index}`}
                                                                        label="Hero Name"
                                                                        variant='standard'
                                                                        name='name'
                                                                        value={heroData.name}
                                                                        onChange={(e) => handleInputChange(e, heroData.id)}
                                                                    >
                                                                        {allHeroInfo.map((heroInfo, index) => (
                                                                            <MenuItem key={index} value={heroInfo.value}>{heroInfo.viewValue}</MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid2>
                                                            <Grid2 item xs={1} md={1} paddingTop='16px'>
                                                                <IconButton
                                                                    disabled={!heroData.name}
                                                                    aria-label="edit"
                                                                    onClick={() => openEditModal(heroData.id)}
                                                                    color="secondary" >
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </Grid2>
                                                            <Grid2 item xs={1} xsOffset={1} mdOffset={1} paddingTop='16px'>
                                                                <IconButton
                                                                    color="error"
                                                                    aria-label="delete"
                                                                    onClick={() => removeHero(heroData.id)}
                                                                >
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </Grid2>
                                                        </Grid2>
                                                    </Card>
                                                </Fade>
                                            </Grid2>
                                        ))
                                }
                            </>
                        </Grid2>
                        <Grid2 item xs={4} md={5} mdOffset={7}>
                            <Paper>
                                <ButtonGroup aria-label="text button group" fullWidth>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            setHeroes(currentArray =>
                                                [...currentArray, {
                                                    id: uuidv4(),
                                                    necklaceStat: '',
                                                    ringStat: '',
                                                    bootStat: '',
                                                    name: '',
                                                    power: '',
                                                    attack: '',
                                                    defense: '',
                                                    health: '',
                                                    speed: '',
                                                    criticalHitChance: '',
                                                    criticalHitDamage: '',
                                                    effectiveness: '',
                                                    effectResistance: '',
                                                    dualAttackChance: '',
                                                }],
                                            )
                                        }}
                                        disabled={(heroes.length >= 3)}
                                        color="primary"
                                    >
                                        Add Hero</Button>
                                    <Button
                                                size="small"
                                                  color="success"
                                                  fullWidth
                                                  onClick={(e) => handleSubmit(e)}
                                    >
                                        Submit to Database</Button>
                                </ButtonGroup>
                            </Paper>

                        </Grid2>
                        
                    </Card>
                </Grid2>

            </Grid2>
        </Container>
    )
}
