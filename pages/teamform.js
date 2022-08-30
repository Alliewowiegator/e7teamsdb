import React from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import { v4 as uuidv4 } from "uuid";
import {
  CardContent,
  Card,
  Button,
  TextField,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  IconButton,
  Fade,
  Paper,
  ButtonGroup,
  CircularProgress,
  Backdrop,
  Alert,
  AlertTitle,
  Stack,
  Divider,
  Avatar,
  CardMedia,
  Unstable_Grid2,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { allHeroInfo } from "../data/heroData";
import { useEffect, useState } from "react";
import HeroEditModal from "../components/HeroEditModal";
import CompHeroCard from "../components/CompHeroCard";

export default function TeamForm() {
  // State variables
  const [submissionErrors, setSubmissionErrors] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const [submission, setSubmission] = useState(false);
  const [heroToEdit, setEditHero] = useState({});
  const [heroes, setHeroes] = useState([]);
  const [open, setOpen] = useState(false);
  const [userInformation, setUserInformation] = useState([
    {
      username: "",
      server: "",
    },
  ]);

  const [teamInfo, setTeamInfo] = useState({
    teamType: "",
    teamDescription: "",
  });

  const [initialHero, setInitialHero] = useState([
    {
      necklaceStat: "",
      ringStat: "",
      bootStat: "",
      name: "",
      power: "",
      attack: "",
      defense: "",
      health: "",
      speed: "",
      criticalHitChance: "",
      criticalHitDamage: "",
      effectiveness: "",
      effectResistance: "",
      dualAttackChance: "",
    },
  ]);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  async function heroBuilder() {
    let heroObject = {
      heroes: [
        {
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
        },
      ],
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
      });
    }

    return heroObject;
  }

  function resetInputs() {
    setUserInformation([
      {
        username: "",
        server: "",
      },
    ]);
    setTeamInfo({
      teamType: "",
      teamDescription: "",
    });
    setHeroes([]);
    setInitialHero([
      {
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "",
        power: "",
        attack: "",
        defense: "",
        health: "",
        speed: "",
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
      },
    ]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmissionErrors("");
    setSubmission(true);

    const heroesObject = await heroBuilder();
    const newTeam = {
      userInfo: {
        username: userInformation.username,
        server: userInformation.server,
      },
      teamInfo: {
        teamType: teamInfo.teamType,
        teamDescription: teamInfo.teamDescription,
      },
      heroes: heroesObject.heroes,
    };

    if (!newTeam.userInfo.username || !newTeam.userInfo.server) {
      setSubmissionErrors("Missing username or server information...");
      setSubmission(false);
    } else if (
      !newTeam.teamInfo.teamType ||
      !newTeam.teamInfo.teamDescription
    ) {
      setSubmissionErrors("Missing team type or description...");
      setSubmission(false);
    } else if (!newTeam.heroes[0].name) {
      setSubmissionErrors("At least one hero needs to be selected...");
      setSubmission(false);
    } else {
      try {
        const res = await fetch(
          "https://e7teamsdb.herokuapp.com/api/allComps",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTeam),
          }
        );

        setTimeout(() => {
          setSubmission(false);
          setSuccessfulSubmission(true);
        }, 3000);

        setTimeout(() => {
          setSuccessfulSubmission(false);
        }, 7000);
        resetInputs();
      } catch (error) {
        setSubmissionErrors("Error during submission...");
        setSubmission(false);
      }
    }
  }

  useEffect(() => {
    const alert = document.getElementById("submission-alert");
    if (alert) {
      alert.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    return () => {
      console.log("Cleanup");
    };
  });

  useEffect(() => {
    const alertFailure = document.getElementById("submission-error");
    if (alertFailure) {
      alertFailure.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    return () => {
      console.log("Cleanup");
    };
  }, [submissionErrors]);

  useEffect(() => {
    const heroIndex = heroes.length - 1;
    if (heroIndex >= 0) {
      let hero = heroes[heroIndex].id;
      const heroElement = document.getElementById(`${hero}`);
      heroElement.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    return () => {
      console.log("Cleanup");
    };
  }, [heroes]);

  function openEditModal(heroId, index) {
    let heroToEdit;
    heroId && index !== undefined
      ? (heroToEdit = heroes.find((hero) => hero.id === heroId))
      : (heroToEdit = initialHero[0]);
    setEditHero({ ...heroToEdit });
    setHeroIndex(index);
    handleOpen(true);
  }

  const handleInputChange = (e, heroId) => {
    const { name, value } = e.target;
    console.log("Name: ", name, " Value:", value);
    console.log("Handle called");
    if (heroId) {
      console.log("In ID");
      const heroIndex = heroes.findIndex((hero) => hero.id === heroId);
      let heroArray = heroes;
      heroArray[heroIndex][name] = value;
      setHeroes([...heroArray]);
    } else {
      console.log("In here");
      let heroArray = initialHero;
      heroArray[0][name] = value;
      setInitialHero([...heroArray]);
    }
  };

  const removeHero = (heroToRemove) => {
    setHeroes(heroes.filter((hero) => hero.id !== heroToRemove));
  };

  return (
    <Container maxWidth="lg">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={submission}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <HeroEditModal
        open={open}
        heroData={heroes}
        index={heroIndex}
        heroInfo={heroToEdit}
        initialHero={initialHero[0]}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
      />
      <Grid2
        container
        spacing={1}
        paddingTop="1.7rem"
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        {successfulSubmission ? (
          <Fade in={successfulSubmission}>
            <Grid2 item xs={4} md={12}>
              <Alert
                severity="success"
                variant="outlined"
                id="submission-alert"
              >
                <AlertTitle>Submission Success</AlertTitle>
                Composition successfully saved to database...
              </Alert>
            </Grid2>
          </Fade>
        ) : null}

        {submissionErrors ? (
          <Fade in={submissionErrors}>
            <Grid2 item xs={4} md={12}>
              <Alert
                severity="warning"
                variant="outlined"
                id="submission-error"
              >
                <AlertTitle>Submission Error</AlertTitle>
                {submissionErrors}
              </Alert>
            </Grid2>
          </Fade>
        ) : null}

        <Grid2 item xs={4} md={12}>
          <Box>
            <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid2 item xs={4} md={6}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#D46F94"
                      gutterBottom
                    >
                      How Does This Work?
                    </Typography>
                    <Typography variant="body1">
                      The form below allows you to enter information about your
                      team. What sort of content it is for, what heroes, and
                      allows you to personalize the stats of each invidual hero.
                      Add heroes as needed.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              <Grid2 item xs={4} md={6}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#D46F94"
                      gutterBottom
                    >
                      What Happens After Submitting?
                    </Typography>
                    <Typography variant="body1">
                      After a successful submission, you&apos;ll be given a URL
                      to view your team directly, or can view it in the
                      database. The URL can be shared with others or linked in
                      places for reuse.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              <Grid2 item xs={4} md={12}>
                <Divider sx={{ margin: "1rem" }} />
              </Grid2>
              <Grid2 item xs={4} md={8} mdOffset={2}>
                <Card
                  sx={{
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <Grid2
                    container
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    alignItems="stretch"
                  >
                    <Grid2 item xs={4} md={12} sx={{ paddingBottom: "1rem" }}>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                        color="#D46F94"
                      >
                        Your In-Game Information
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <TextField
                          id="filled-basic"
                          label="Username"
                          fullWidth
                          onChange={(e) =>
                            setUserInformation({
                              ...userInformation,
                              username: e.target.value,
                            })
                          }
                          variant="standard"
                        />
                        <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                        >
                          <InputLabel id="user-server">Server</InputLabel>
                          <Select
                            labelId="user-server"
                            id="userServer"
                            label="Server"
                            variant="standard"
                            onChange={(e) =>
                              setUserInformation({
                                ...userInformation,
                                server: e.target.value,
                              })
                            }
                          >
                            <MenuItem value={"Global"}>Global</MenuItem>
                            <MenuItem value={"Korea"}>KR</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                          </Select>
                        </FormControl>
                      </Stack>
                    </Grid2>
                    <Grid2 item xs={4} md={12}>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                        color="#D46F94"
                      >
                        Your Team Information
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <TextField
                          fullWidth
                          label="Team Description"
                          variant="standard"
                          onChange={(e) =>
                            setTeamInfo({
                              ...teamInfo,
                              teamDescription: e.target.value,
                            })
                          }
                        />
                        <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                        >
                          <InputLabel id="team-type">Team Type</InputLabel>
                          <Select
                            labelId="team-type"
                            id="teamType"
                            label="Team Type"
                            variant="standard"
                            onChange={(e) =>
                              setTeamInfo({
                                ...teamInfo,
                                teamType: e.target.value,
                              })
                            }
                          >
                            <MenuItem value={"Wyvern"}>Wyvern</MenuItem>
                            <MenuItem value={"Banshee"}>Banshee</MenuItem>
                            <MenuItem value={"Golem"}>Golem</MenuItem>
                            <MenuItem value={"Guild War Defense"}>
                              Guild War Defense
                            </MenuItem>
                            <MenuItem value={"Guild War Offense"}>
                              Guild War Offense
                            </MenuItem>
                            <MenuItem value={"Arena Defense"}>
                              Arena Defense
                            </MenuItem>
                            <MenuItem value={"Arena Offense"}>
                              Arena Offense
                            </MenuItem>
                            <MenuItem value={"RTA"}>RTA</MenuItem>
                            <MenuItem value={"Abyss"}>Abyss</MenuItem>
                            <MenuItem value={"Adventure"}>Adventure</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                          </Select>
                        </FormControl>
                      </Stack>
                    </Grid2>
                  </Grid2>
                </Card>
              </Grid2>
              <Grid2 item xs={4} md={12}>
                <Divider sx={{ margin: "1rem" }} />
              </Grid2>
              <Grid2 item xs={4} md={3}>
                <CompHeroCard
                  heroInfo={initialHero[0]}
                  openEditModal={openEditModal}
                  handleInputChange={handleInputChange}
                />
              </Grid2>
              {heroes.map((hero, index) => {
                return (
                  <Fade in={true} key={index}>
                    <Grid2 item xs={4} md={3} key={index} id={hero.id}>
                      <CompHeroCard
                        heroInfo={hero}
                        openEditModal={openEditModal}
                        handleInputChange={handleInputChange}
                        removeHero={removeHero}
                        index={index}
                      />
                    </Grid2>
                  </Fade>
                );
              })}
              <Grid2 item xs={4} md={12}>
                <Divider sx={{ margin: "1rem" }} />
              </Grid2>
              <Grid2 item xs={4} md={4} mdOffset={4}>
                <ButtonGroup
                  variant="outlined"
                  aria-label="text button group"
                  fullWidth
                >
                  <Button
                    size="small"
                    onClick={() => {
                      setHeroes((currentArray) => [
                        ...currentArray,
                        {
                          id: uuidv4(),
                          necklaceStat: "",
                          ringStat: "",
                          bootStat: "",
                          name: "",
                          power: "",
                          attack: "",
                          defense: "",
                          health: "",
                          speed: "",
                          criticalHitChance: "",
                          criticalHitDamage: "",
                          effectiveness: "",
                          effectResistance: "",
                          dualAttackChance: "",
                        },
                      ]);
                    }}
                    disabled={heroes.length >= 3}
                    color="primary"
                  >
                    Add Hero
                  </Button>
                  <Button
                    size="small"
                    color="success"
                    fullWidth
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit to Database
                  </Button>
                </ButtonGroup>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
