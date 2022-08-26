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
} from "@mui/material";

import CompPreview from "../components/CompPreview";

const Comps = ({ compData }) => {
    const [filteredData, setFilteredData] = useState(compData);
    const [contentFilter, setContentFilter] = useState("");

    const filteredContent = () => {
        if (filteredData.length <= 0) {
            return (
                <Grid2 item md={12} xs={4}>
                    <Typography variant="body1">
                        No Matching Compositions were Found with Your Search Parameters
                    </Typography>
                </Grid2>
            )
        } else {
            return (
                filteredData.map((hero, index) => (
                    <Grid2 key={index} item md={4} xs={4}>
                        <CompPreview {...hero}></CompPreview>
                    </Grid2>
                ))
            )
        }
    }

    useEffect(() => {
        if (contentFilter) {
            setFilteredData(compData.filter(composition => composition.teamInfo.teamType === contentFilter));
            console.log(filteredData);
        } else {
            setFilteredData(compData);
        }
    }, [contentFilter])

    return (
        <Container maxWidth="lg">
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
                            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                                Team Compositions
                            </Typography>
                            <Typography variant="body1">
                                This will allow you to find team compositions that fit your
                                need. Whether it be based on a unit, content type, or blah blah
                                blah.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={4} md={12}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
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
                                            onChange={(e) =>
                                                setContentFilter(e.target.value)
                                            }
                                            labelId="content-filter"
                                            id="content-filter"
                                            input={
                                                <OutlinedInput
                                                    id="select-multiple-chip"
                                                    label="Filter By Content"
                                                />
                                            }
                                        >
                                            <MenuItem value={""}><em>None</em></MenuItem>
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
                                    { filteredContent() }
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
