import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import React from "react";

export default function HeroEditAccordion(props) {

    const buildAccordion = () => {
        if (props.type === 'dropdown') {
            return (
                props.inputs.map((input, index) => {
                    return (
                        <FormControl key={index} fullWidth variant="standard" sx={{minWidth: 120}}>
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
        }
    }

    return (
        <Accordion sx={{backgroundColor: '#1e1e1e'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.panelName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {buildAccordion()}
            </AccordionDetails>
        </Accordion>

    )
}