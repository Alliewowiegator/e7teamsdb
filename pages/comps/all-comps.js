/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Typography, InputLabel, Select,
  OutlinedInput, MenuItem, FormControl, Divider, Fade, Alert, AlertTitle,
} from "@mui/material";
import CompPreviewModal from "../../components/CompPreviewModal";
import CompPreviewCard from "../../components/CompPreviewCard";
const AllComps = ({ compData }) => {
  const [filteredData, setFilteredData] = useState(compData);
  const [contentFilter, setContentFilter] = useState("");
  const [compToView, setCompToView] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  function openCompModal(compId) {
    let selectedComp = compData.find((hero) => hero._id === compId);
    setCompToView({ ...selectedComp });
    handleOpen(true);
  }

  const teamTypes = [
    "Wyvern", "Banshee", "Golem", "Guild War Defense", "Guild War Offense", 
    "Arena Defense", "RTA", "Abyss", "Adventure", "Brutal Pherus",
    "Blooming Snag Lich", "Pain Pursuer Moroi", "Hopeless Symaqus", "Destructive Gigantes", "Other"
  ];

  const filteredContent = () => {
    if (filteredData.length <= 0) {
      return (
        <Fade in={true}>
          <Grid2 item md={12} xs={4}>
            <Grid2 item xs={4} md={12}>
              <Alert
                severity="warning"
                variant="outlined"
                id="submission-error"
              >
                No Compositions Were Found Matching Your Search Parameters: {contentFilter}
              </Alert>
            </Grid2>
          </Grid2>
        </Fade>
      );
    } else {
      return filteredData.map((hero, index) => (
        <Fade in={true} key={index}>
          <Grid2 key={hero} item md={4} xs={4}>
            <CompPreviewCard
              {...hero}
              openCompModal={openCompModal}
            />
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
    } else {
      setFilteredData(compData);
    }
  }, [contentFilter]);

  return (
    <Container maxWidth="lg">
      {compToView ? <CompPreviewModal open={open} {...compToView} handleClose={handleClose} /> : null}
      <Grid2
        container
        spacing={2}
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
                        <em>No Filter</em>
                      </MenuItem>
                      {teamTypes.map((teamType, index) => (
                        <MenuItem key={index} value={teamType}>
                          {teamType}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 item xs={4} md={12}>
                  <Divider sx={{ margin: "1rem" }}>
                    <Typography sx={{ color: "#D46F94" }}>
                      Submitted Composition Data
                    </Typography>
                  </Divider>
                </Grid2>
                <Grid2 item xs={4} md={12}>
                  <Grid2
                    container
                    spacing={2}
                    md={12}
                    xs={4}
                    paddingTop="1rem"
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {filteredContent()}
                  </Grid2>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
};

AllComps.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/allComps", { method: 'GET', headers : { service: 'allComps'} });
  const { data } = await res.json();
  return { compData: data };
};

export default AllComps;
