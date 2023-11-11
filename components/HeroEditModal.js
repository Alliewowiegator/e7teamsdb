import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import {
  Modal, Card, CardContent, Fade, CardHeader, InputLabel, Select,
  MenuItem, FormControl, Divider, TextField, Avatar, Slider, Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { allHeroInfo } from "../data/heroData";
import { allArtifactInfo } from "../data/artifactData";
import HeroEditTextField from "./HeroEditTextField";

export default function HeroEditModal(props) {
  function getHeroPortrait() {
    if (props.index >= 0) {
      if (props.heroData[props.index] && props.heroData[props.index].name) {
          let heroToReturn = allHeroInfo.find((hero) => hero.value === props.heroData[props.index].name);
          return heroToReturn.image;
      }
    } else if (props.initialHero.name) {
      let heroToReturn = allHeroInfo.find((hero) => hero.value === props.initialHero.name);
      return heroToReturn.image;
    }
  }

  function getArtifactLevel() {
    if (props.index >= 0) {
      if (props.heroData[props.index] && props.heroData[props.index].artifactLevel) {
        return props.heroData[props.index].artifactLevel
      }
    } else if (props.initialHero.artifactLevel) {
      return props.initialHero.artifactLevel
    }
  }

  function getHeroEditTitle() {
    if (props.index >= 0) {
      return props.heroData[props.index] ? props.heroData[props.index].name : "Awaiting Selection...";
    } else if (props.initialHero.name) {
      return props.initialHero.name;
    } else {
      return "Awaiting Selection...";
    }
  }
  
  const setEffects = [  "Attack Set", "Defense Set", "Health Set", "Speed Set",
    "Critical Set", "Destruction Set", "Hit Set", "Resist Set", "Lifesteal Set",
    "Counter Set", "Unity Set", "Immunity Set", "Rage Set", "Penetration Set",
    "Revenge Set", "Injury Set"
  ]
  const imprints = ["B", "A", "S", "SS", "SSS"]
  const heroStats = {
    attack: "Attack",
    defense: "Defense",
    health: "Health",
    speed: "Speed",
    criticalHitChance: "Critical Hit Chance",
    criticalHitDamage: "Critical Hit Damage",
    effectiveness: "Effectiveness",
    effectResistance: "Effect Resistance",
    dualAttackChance: "Dual Attack Chance",
  };

  return (
    <Container maxWidth="lg">
      <Modal open={props.open} onClose={props.handleClose}>
        <Fade in={props.open}>
          <Card
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: { xs: "auto", md: "hidden" },
              minWidth: { xs: "83%", md: "50%" },
              maxHeight: { xs: "75%" },
              minHeight: { md: "55%" },
            }}
          >
            <CardHeader
              avatar={<Avatar src={getHeroPortrait()} />}
              title={getHeroEditTitle()}
              subheader={
                props.index >= 0 ? `Hero ${props.index + 2}` : `Hero 1`
              }
            />
            <CardContent>
              <Grid2 container spacing={2} columns={{ xs: 6, sm: 8, md: 12 }}>
                <Grid2 item md={3} xs={6} mdOffset={3}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel id="hero-name">Hero</InputLabel>
                    <Select
                      labelId="hero-name"
                      id={`heroName${props.index}`}
                      label="Hero Name"
                      variant="standard"
                      name="name"
                      defaultValue={props.heroInfo.name}
                      onChange={(e) =>
                        props.handleInputChange(e, props.heroInfo.id)
                      }
                    >
                      {allHeroInfo.map((heroInfo, index) => (
                        <MenuItem key={index} value={heroInfo.value}>
                          {heroInfo.viewValue}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 item md={3} xs={6}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel id="awakening-level">
                      Awakening Level
                    </InputLabel>
                    <Select
                      labelId="awakening-level"
                      id="awakeningLevel"
                      label="Awakening Level"
                      variant="standard"
                      name="awakeningLevel"
                      defaultValue={props.heroInfo.awakeningLevel}
                      onChange={(e) =>
                        props.handleInputChange(e, props.heroInfo.id)
                      }
                    >
                      <MenuItem value={"None"}>
                        <em>None</em>
                      </MenuItem>
                      {Array.from({ length: 6 }, (x, i) => {
                        i++;
                        return <MenuItem value={i}>+{i}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={7} xs={6} mdOffset={2.5}>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                      <Typography>Artifact Data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="artifact-name">Artifact</InputLabel>
                        <Select
                            labelId="artifact-name"
                            id={`artifactName${props.index}`}
                            label="Artifact Name"
                            variant="standard"
                            name="artifact"
                            defaultValue={props.heroInfo.artifact}
                            onChange={(e) =>
                                props.handleInputChange(e, props.heroInfo.id)
                            }
                        >
                          <MenuItem value={"None"}>
                            <em>None</em>
                          </MenuItem>
                          {allArtifactInfo.map((artifactInfo, index) => (
                              <MenuItem key={index} value={artifactInfo.value}>
                                {artifactInfo.value}
                              </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <Typography id="artifact-level" gutterBottom>
                        Artifact Level -{" "}
                        {getArtifactLevel() ? getArtifactLevel() : "0"}
                      </Typography>
                      <Slider
                          sx={{ color: "#D46F94", minWidth: "98%" }}
                          max={30}
                          step={1}
                          variant="standard"
                          id="artifact-level"
                          marks={Array.from({ length: 31 }, (x, i) => {
                            return i % 5 === 0 ? { value: i, label: `${i}` } : "";
                          })}
                          name="artifactLevel"
                          defaultValue={props.heroInfo.artifactLevel}
                          onChange={(e) =>
                              props.handleInputChange(e, props.heroInfo.id)
                          }
                          aria-labelledby="artifact-level"
                      />
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
                <Grid2 item md={7} mdOffset={2.5} xs={6}>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                      <Typography>Imprint Data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                      >
                        <InputLabel id="imprint-type">Imprint Type</InputLabel>
                        <Select
                            name="imprintType"
                            labelId="imprint-type"
                            id="imprintType"
                            label="Imprint Type"
                            variant="standard"
                            onChange={(e) =>
                                props.handleInputChange(e, props.heroInfo.id)
                            }
                            defaultValue={props.heroInfo.imprintType}
                        >
                          <MenuItem value={"None"}>
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Imprint Release"}>
                            Imprint Release
                          </MenuItem>
                          <MenuItem value={"Imprint Concentration"}>
                            Imprint Concentration
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                      >
                        <InputLabel id="imprint-level">Imprint Level</InputLabel>
                        <Select
                            name="imprintLevel"
                            labelId="imprint-type"
                            id="imprintLevel"
                            label="Imprint Level"
                            variant="standard"
                            onChange={(e) =>
                                props.handleInputChange(e, props.heroInfo.id)
                            }
                            defaultValue={props.heroInfo.imprintLevel}
                        >
                          <MenuItem value={"None"}>
                            <em>None</em>
                          </MenuItem>
                          {imprints.map((level, index) => {
                            return (
                                <MenuItem key={index} value={level}>
                                  {level}
                                </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
                <Grid2 item md={7} mdOffset={2.5} xs={6}>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                      <Typography>Accessories Data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                      >
                        <InputLabel id="necklace-main">
                          Necklace Main Stat
                        </InputLabel>
                        <Select
                            name="necklaceStat"
                            labelId="necklace-main"
                            id="necklaceStat"
                            label="Necklace Stat"
                            variant="standard"
                            onChange={(e) =>
                                props.handleInputChange(e, props.heroInfo.id)
                            }
                            defaultValue={props.heroInfo.necklaceStat}
                        >
                          <MenuItem value={"Critical Hit Damage"}>
                            Critical Hit Damage
                          </MenuItem>
                          <MenuItem value={"Critical Hit Chance"}>
                            Critical Hit Chance
                          </MenuItem>
                          <MenuItem value={"Health %"}>Health %</MenuItem>
                          <MenuItem value={"Health"}>Health</MenuItem>
                          <MenuItem value={"Defense %"}>Defense %</MenuItem>
                          <MenuItem value={"Defense"}>Defense</MenuItem>
                          <MenuItem value={"Attack %"}>Attack %</MenuItem>
                          <MenuItem value={"Attack"}>Attack</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                      >
                        <InputLabel id="ring-stat">Ring Main Stat</InputLabel>
                        <Select
                            name="ringStat"
                            labelId="ring-stat"
                            id="ringStat"
                            label="Ring Stat"
                            variant="standard"
                            onChange={(e) =>
                                props.handleInputChange(e, props.heroInfo.id)
                            }
                            defaultValue={props.heroInfo.ringStat}
                        >
                          <MenuItem value={"Effectiveness %"}>
                            Effectiveness %
                          </MenuItem>
                          <MenuItem value={"Attack %"}>Attack %</MenuItem>
                          <MenuItem value={"Attack"}>Attack</MenuItem>
                          <MenuItem value={"Health %"}>Health %</MenuItem>
                          <MenuItem value={"Health"}>Health</MenuItem>
                          <MenuItem value={"Defense %"}>Defense %</MenuItem>
                          <MenuItem value={"Defense"}>Defense</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                          fullWidth
                          variant="standard"
                          sx={{ minWidth: 120 }}
                      >
                        <InputLabel id="boot-stat">Boot Main Stat</InputLabel>
                        <Select
                            name="bootStat"
                            labelId="boot-stat"
                            id="bootStat"
                            label="Boot Stat"
                            variant="standard"
                            defaultValue={props.heroInfo.bootStat}
                            onChange={(e) =>
                                props.handleInputChange(e, props.heroInfo.id)
                            }
                        >
                          <MenuItem value={"Speed"}>Speed</MenuItem>
                          <MenuItem value={"Attack %"}>Attack %</MenuItem>
                          <MenuItem value={"Attack"}>Attack</MenuItem>
                          <MenuItem value={"Health %"}>Health %</MenuItem>
                          <MenuItem value={"Health"}>Health</MenuItem>
                          <MenuItem value={"Defense %"}>Defense %</MenuItem>
                          <MenuItem value={"Defense"}>Defense</MenuItem>
                        </Select>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
                <Grid2 item md={7} mdOffset={2.5} xs={6}>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                      <Typography>Set Effect Data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {Array.from({ length: 3 }, (x, i) => {
                        i++;
                        return (
                            <Grid2 item md={12} xs={6}>
                              <FormControl
                                  fullWidth
                                  variant="standard"
                                  sx={{ minWidth: 120 }}
                              >
                                <InputLabel id={`set-effect-${i}`}>
                                  Set Effect {i}
                                </InputLabel>
                                <Select
                                    name={`setEffect${i}`}
                                    labelId={`setEffect${i}`}
                                    id={`setEffect${i}`}
                                    label={`Set Effect ${i}`}
                                    variant="standard"
                                    onChange={(e) =>
                                        props.handleInputChange(e, props.heroInfo.id)
                                    }
                                    defaultValue={props.heroInfo[`setEffect${i}`]}
                                >
                                  <MenuItem value={"None"}>
                                    <em>No Set</em>
                                  </MenuItem>
                                  {setEffects.map((set, index) => {
                                    return (
                                        <MenuItem key={index} value={set}>
                                          {set}
                                        </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            </Grid2>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                </Grid2>
                <Grid2 item md={12} xs={6}>
                  <Divider sx={{ margin: "1rem" }} />
                </Grid2>
                {Object.entries(heroStats).map(([key, value], index) => {
                  return (
                    <Grid2 key={index} item md={3} xs={6} mdOffset={index === 8 ? 4.5 : 0} >
                      <HeroEditTextField
                        stat={key}
                        text={value}
                        handleInputChange={props.handleInputChange}
                        heroInfo={props.heroInfo}
                      />
                    </Grid2>
                  );
                })}
              </Grid2>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </Container>
  );
}
