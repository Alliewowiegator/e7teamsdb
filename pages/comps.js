/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardContent,
  Typography,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormControl,
  Divider,
  Fade,
  Alert,
  AlertTitle,
} from "@mui/material";

import CompPreviewModal from "../components/CompPreviewModal";
import CompPreviewCard from "../components/CompPreviewCard";

const Comps = ({ compData }) => {
  const [filteredData, setFilteredData] = useState(compData);
  const [contentFilter, setContentFilter] = useState("");
  const [compToView, setCompToView] = useState({
    _id: "",
    userInfo: {
      username: "",
      server: "",
      _id: "",
    },
    teamInfo: {
      teamType: "",
      teamDescription: "",
      _id: "",
    },
    heroes: [
      {
        id: "",
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "",
        power: null,
        attack: null,
        defense: null,
        health: null,
        speed: null,
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
        _id: "",
      },
      {
        id: "",
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "",
        power: null,
        attack: null,
        defense: null,
        health: null,
        speed: null,
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
        _id: "",
      },
      {
        id: "",
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "Ilynav",
        power: null,
        attack: null,
        defense: null,
        health: null,
        speed: null,
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
        _id: "",
      },
      {
        id: "",
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "",
        power: null,
        attack: null,
        defense: null,
        health: null,
        speed: null,
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
        _id: "",
      },
    ],
    __v: 0,
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  function openCompModal(compId) {
    let selectedComp = compData.find((hero) => hero._id === compId);
    setCompToView({ ...selectedComp });
    handleOpen(true);
    console.log(compToView);
  }

  const filteredContent = () => {
    if (filteredData.length <= 0) {
      return (
        <Grid2 item md={12} xs={4}>
          <Fade in={true}>
            <Grid2 item xs={4} md={12}>
              <Alert
                severity="warning"
                variant="outlined"
                id="submission-error"
              >
                No Compositions Were Found Matching Your Search Parameters
              </Alert>
            </Grid2>
          </Fade>
        </Grid2>
      );
    } else {
      return filteredData.map((hero, index) => (
        <Fade in={true} key={index}>
          <Grid2 key={hero} item md={4} xs={4}>
            <CompPreviewCard
              {...hero}
              openCompModal={openCompModal}
            ></CompPreviewCard>
          </Grid2>
        </Fade>
      ));
    }
  };

  useEffect(() => {
    if (contentFilter) {
      setFilteredData(
        compData.filter(
          (composition) => composition.teamInfo.teamType === contentFilter
        )
      );
      console.log(filteredData);
    } else {
      setFilteredData(compData);
    }
  }, [contentFilter]);

  return (
    <Container maxWidth="lg">
      <CompPreviewModal open={open} {...compToView} handleClose={handleClose} />
      <Grid2
        container
        spacing={3}
        paddingTop="2rem"
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        <Grid2 item xs={4} md={12}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
                Team Compositions
              </Typography>
              <Typography variant="body1">
                This page will allow you to view all compositions submitted by
                other users. Here you can view each one indvidually, sort by
                what you need, or link directly to them to share around. A lot
                of this is subject to change and I am actively working on it.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={4} md={12}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#D46F94" gutterBottom>
                Team Compositions
              </Typography>
              <Grid2
                container
                spacing={1}
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems="stretch"
              >
                <Grid2 item md={3} xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="content-filter">
                      Filter By Content
                    </InputLabel>
                    <Select
                      onChange={(e) => setContentFilter(e.target.value)}
                      labelId="content-filter"
                      id="content-filter"
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Filter By Content"
                        />
                      }
                    >
                      <MenuItem value={""}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Wyvern"}>Wyvern</MenuItem>
                      <MenuItem value={"Banshee"}>Banshee</MenuItem>
                      <MenuItem value={"Golem"}>Golem</MenuItem>
                      <MenuItem value={"Guild War Defense"}>
                        Guild War Defense
                      </MenuItem>
                      <MenuItem value={"Guild War Offense"}>
                        Guild War Offense
                      </MenuItem>
                      <MenuItem value={"Arena Defense"}>Arena Defense</MenuItem>
                      <MenuItem value={"Arena Offense"}>Arena Offense</MenuItem>
                      <MenuItem value={"RTA"}>RTA</MenuItem>
                      <MenuItem value={"Abyss"}>Abyss</MenuItem>
                      <MenuItem value={"Adventure"}>Adventure</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 item md={12} xs={4}>
                  <Divider />
                </Grid2>
                <Grid2
                  container
                  spacing={3}
                  md={12}
                  xs={4}
                  paddingTop="2rem"
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  alignItems="stretch"
                >
                  {filteredContent()}
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
};

Comps.getInitialProps = async () => {
  const res = await fetch("https://e7teamsdb.herokuapp.com/api/allComps");
  const { data } = await res.json();

  return { compData: data };
};

export default Comps;
