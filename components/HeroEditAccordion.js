import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {FormControl, InputLabel, MenuItem, Select, Typography, Slider} from "@mui/material";
import React from "react";
import {allArtifactInfo} from "../data/artifactData";

export default function HeroEditAccordion(props) {

    const buildAccordion = () => {
        if (props.type === 'dropdown') {
            return (
                props.inputs.map((input, index) => {
                    return (
                        <FormControl key={index} fullWidth variant="standard" sx={{minWidth: 120}} margin='normal'>
                            <InputLabel id={input.name}>{input.name}</InputLabel>
                            <Select
                                labelId={input.name}
                                id={input.name + props.index}
                                variant="standard"
                                name={input.jsonValue}
                                defaultValue={props.heroInfo[input.jsonValue]}
                                onChange={(e) =>
                                    props.handleInputChange(e, props.heroInfo.id)
                                }
                            >
                                {input.dropdownItems.map((item, index) => (
                                    <MenuItem key={index} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )
                })
            )
        } else {
            return (
                <FormControl fullWidth variant="standard" margin='normal'>
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
                    <Typography id="artifact-level" gutterBottom>
                        Artifact Level -{" "}
                        {props.getArtifactLevel ? props.getArtifactLevel : "0"}
                    </Typography>
                    <Slider
                        sx={{color: "#D46F94", minWidth: "98%"}}
                        max={30}
                        step={1}
                        variant="standard"
                        id="artifact-level"
                        marks={Array.from({length: 31}, (x, i) => {
                            return i % 5 === 0 ? {value: i, label: `${i}`} : "";
                        })}
                        name="artifactLevel"
                        defaultValue={props.heroInfo.artifactLevel}
                        onChange={(e) =>
                            props.handleInputChange(e, props.heroInfo.id)
                        }
                        aria-labelledby="artifact-level"
                    />
                </FormControl>

            )
        }
    }

    return (
        <Accordion sx={{backgroundColor: '#1e1e1e'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.panelName ? props.panelName : 'Artifact Data'}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {buildAccordion()}
            </AccordionDetails>
        </Accordion>

    )
}