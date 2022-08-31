import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import {
  Modal, Card, CardContent, Fade, CardHeader, IconButton,
  InputLabel, Select, MenuItem, FormControl, Divider, TextField,
  Avatar, Slider, Input, Typography
} from "@mui/material";
import { allHeroInfo } from "../data/heroData";
import { allArtifactInfo } from "../data/artifactData";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function HeroEditModal(props) {
  function getHeroPortrait() {
    if (props.index >= 0) {
      if (props.heroData[props.index]) {
        if (props.heroData[props.index].name) {
          let heroToReturn = allHeroInfo.find(
            (hero) => hero.value === props.heroData[props.index].name
          );
          return heroToReturn.image;
        }
      }
    } else if (props.initialHero.name) {
      let heroToReturn = allHeroInfo.find(
        (hero) => hero.value === props.initialHero.name
      );
      return heroToReturn.image;
    }
  }

  function getArtifactLevel() {
    if (props.index >= 0) {
      if (props.heroData[props.index]) {
        if (props.heroData[props.index].artifactLevel) {
          return props.heroData[props.index].artifactLevel
        }
      }
    } else if (props.initialHero.artifactLevel) {
      return props.initialHero.artifactLevel
    }
  }

  function getHeroEditTitle() {
    if (props.index >= 0) {
      if (props.heroData[props.index]) {
        return props.heroData[props.index].name;
      } else {
        return "Awaiting Selection...";
      }
    } else if (props.initialHero.name) {
      return props.initialHero.name;
    } else {
      return "Awaiting Selection...";
    }
  }
  

  // Todo: Refactor textfields in to their own components and other stuff

  return (
    <Container maxWidth="lg">
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={props.open}>
          <Card
            sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", overflow: "auto", minWidth: { xs: "80%", md: "50%" }, }}
          >
            <CardHeader
              avatar={<Avatar src={getHeroPortrait()} />}
              title={getHeroEditTitle()}
              subheader={ props.index >= 0 ? `Hero ${props.index + 2}` : `Hero 1` }
            />
            <CardContent>
              <Grid2 container spacing={2} columns={{ xs: 6, sm: 8, md: 4 }}>
                <Grid2 item md={2} mdOffset={1} xs={6}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel id="hero-name">Hero</InputLabel>
                    <Select
                      labelId="hero-name"
                      id={`heroName${props.index}`}
                      label="Hero Name"
                      variant="standard"
                      name="name"
                      defaultValue={props.heroInfo.name}
                      onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                    >
                      {allHeroInfo.map((heroInfo, index) => (
                        <MenuItem key={index} value={heroInfo.value}>
                          {heroInfo.viewValue}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={6} xs={6}>
                  <Divider sx={{ margin: '1rem' }} />
                </Grid2>
                <Grid2 item md={1} mdOffset={1} xs={6}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel id="artifact-name">Artifact</InputLabel>
                    <Select
                      labelId="artifact-name"
                      id={`artifactName${props.index}`}
                      label="Artifact Name"
                      variant="standard"
                      name="artifact"
                      defaultValue={props.heroInfo.artifact}
                      onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                    >
                      {allArtifactInfo.map((artifactInfo, index) => (
                        <MenuItem key={index} value={artifactInfo.value}>
                          {artifactInfo.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={1} xs={6}>
                <Typography id="artifact-level" gutterBottom>
                  Artifact Level - { getArtifactLevel() ? getArtifactLevel() : '0' }
                </Typography>
                  <FormControl sx={{minWidth: '98%'}} variant="standard">
                    <Slider
                      sx={{ color: "#D46F94" }}
                      max={30}
                      step={1}
                      id="artifact-level"
                      marks={Array.from({ length: 31 }, (x, i) => {
                        return ((i % 5 === 0) ? { value: (i), label: `${i}` } : '')
                      })}
                      name="artifactLevel"
                      value={getArtifactLevel()}
                      onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                      aria-labelledby="artifact-level"
                    />
                  </FormControl>
                </Grid2>
                <Grid2 item md={1} mdOffset={0.5} xs={6}>
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
                      onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
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
                </Grid2>
                <Grid2 item md={1} xs={6}>
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
                      onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                      defaultValue={props.heroInfo.ringStat}
                    >
                      <MenuItem value={"Effectiveness %"}>
                        Effectiveness %
                      </MenuItem>
                      <MenuItem value={"Effect Resistance %"}>
                        Critical Hit Chance
                      </MenuItem>
                      <MenuItem value={"Attack %"}>Attack %</MenuItem>
                      <MenuItem value={"Attack"}>Attack</MenuItem>
                      <MenuItem value={"Health %"}>Health %</MenuItem>
                      <MenuItem value={"Health"}>Health</MenuItem>
                      <MenuItem value={"Defense %"}>Defense %</MenuItem>
                      <MenuItem value={"Defense"}>Defense</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={1} xs={6}>
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
                      onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
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
                </Grid2>
                <Grid2 item md={6} xs={6}>
                  <Divider sx={{ margin: '1rem' }} />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="attack"
                    defaultValue={ props.heroInfo.attack ? props.heroInfo.attack : "" }
                    fullWidth
                    label="Attack"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="defense"
                    defaultValue={ props.heroInfo.defense ? props.heroInfo.defense : "" }
                    fullWidth
                    label="Defense"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="health"
                    defaultValue={ props.heroInfo.health ? props.heroInfo.health : "" }
                    fullWidth
                    label="Health"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="speed"
                    defaultValue={ props.heroInfo.speed ? props.heroIfno.speed : "" }
                    fullWidth
                    label="Speed"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="criticalHitChance"
                    defaultValue={ props.heroInfo.criticalHitChance ? props.heroInfo.criticalHitChance : "" }
                    fullWidth
                    label="Critical Hit Chance"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="criticalHitDamage"
                    defaultValue={ props.heroInfo.criticalHitDamage ? props.heroInfo.criticalHitDamage : "" }
                    fullWidth
                    label="Critical Hit Damage"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="effectiveness"
                    defaultValue={ props.heroInfo.effectiveness ? props.heroInfo.effectiveness : "" }
                    fullWidth
                    label="Effectiveness"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="effectResistance"
                    defaultValue={ props.heroInfo.effectResistance ? props.heroInfo.effectResistance : "" }
                    fullWidth
                    label="Effect Resistance"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} mdOffset={1} xs={3}>
                  <TextField
                    name="dualAttackChance"
                    defaultValue={ props.heroInfo.dualAttackChance ? props.heroInfo.dualAttackChance : "" }
                    fullWidth
                    label="Dual Attack Chance"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
                <Grid2 item md={1} xs={3}>
                  <TextField
                    name="power"
                    defaultValue={ props.heroInfo.power ? props.heroInfo.power : "" }
                    fullWidth
                    label="Combat Power"
                    variant="standard"
                    onChange={(e) => props.handleInputChange(e, props.heroInfo.id) }
                  />
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </Container>
  );
}
