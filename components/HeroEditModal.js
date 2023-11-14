import React from "react";
import Container from "@mui/material/Container";
import {
    Modal,
    Card,
    CardContent,
    Fade,
    CardHeader,
    Avatar,
    Divider,
    MenuItem,
    FormControl,
    Select, InputLabel, Typography
} from "@mui/material";
import {allHeroInfo} from "../data/heroData";
import {setEffects, imprints, accessoryMainstats, heroStats} from "../utility/utilityFunctions";
import HeroEditAccordion from "./HeroEditAccordion";
import Grid2 from "@mui/material/Unstable_Grid2";
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

    const setEffectAccordionData = {
        type: 'dropdown',
        panelName: 'Set Effects',
        inputs: [
            {name: 'Set Effect 1', dropdownItems: setEffects, jsonValue: 'setEffect1'},
            {name: 'Set Effect 2', dropdownItems: setEffects, jsonValue: 'setEffect2'},
            {name: 'Set Effect 3', dropdownItems: setEffects, jsonValue: 'setEffect3'}
        ]
    }

    const imprintAccordionData = {
        type: 'dropdown',
        panelName: 'Imprint Data',
        inputs: [
            {name: 'Imprint Type', dropdownItems: ['Imprint Release', 'Imprint Concentration'], jsonValue: 'imprintType'},
            {name: 'Imprint Level', dropdownItems: imprints, jsonValue: 'imprintLevel'},
        ]
    }

    const accessoriesAccordionData = {
        type: 'dropdown',
        panelName: 'Accessory Data',
        inputs: [
            {name: 'Necklace Main Stat', dropdownItems: accessoryMainstats.necklace, jsonValue: 'necklaceStat'},
            {name: 'Ring Main Stat', dropdownItems: accessoryMainstats.ring, jsonValue: 'ringStat'},
            {name: 'Boot Main Stat', dropdownItems: accessoryMainstats.boots, jsonValue: 'bootStat'},
        ]
    }

    const artifactAccordionData = {
        type: 'dropdown',
        panelName: 'Artifact Data',
        inputs: [
            {name: 'Necklace Main Stat', dropdownItems: accessoryMainstats.necklace, jsonValue: 'necklaceStat'},
            {name: 'Ring Main Stat', dropdownItems: accessoryMainstats.ring, jsonValue: 'ringStat'},
            {name: 'Boot Main Stat', dropdownItems: accessoryMainstats.boots, jsonValue: 'bootStat'},
        ]
    }

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
                            overflow: {xs: "auto", md: "hidden"},
                            minWidth: {xs: "83%", md: "50%"},
                            maxHeight: {xs: "75%"},
                            minHeight: {md: "55%"},
                        }}
                    >
                        <CardHeader
                            avatar={<Avatar src={getHeroPortrait()}/>}
                            title={getHeroEditTitle()}
                            subheader={props.index >= 0 ? `Hero ${props.index + 2}` : `Hero 1`}
                        />
                        <CardContent>
                            <Grid2 container spacing={2} columns={{xs: 6, sm: 8, md: 12}}>
                                <Grid2 item md={6} xs={6}>
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
                                <Grid2 item md={6} xs={6}>
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
                                            {Array.from({length: 6}, (x, i) => {
                                                i++;
                                                return <MenuItem value={i}>+{i}</MenuItem>;
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid2>
                                <Grid2 item xs={6} md={12}>
                                    <Divider sx={{margin: "1rem"}} />
                                </Grid2>
                                <Grid2 item md={12} xs={6}>
                                    <HeroEditAccordion {...setEffectAccordionData}
                                                       heroInfo={props.heroInfo}
                                                       handleInputChange={props.handleInputChange}
                                    />

                                    <HeroEditAccordion {...imprintAccordionData}
                                                       heroInfo={props.heroInfo}
                                                       handleInputChange={props.handleInputChange}
                                    />

                                    <HeroEditAccordion {...accessoriesAccordionData}
                                                       heroInfo={props.heroInfo}
                                                       handleInputChange={props.handleInputChange}
                                    />

                                    <HeroEditAccordion heroInfo={props.heroInfo}
                                                       handleInputChange={props.handleInputChange}
                                                       getArtifactLevel={getArtifactLevel()}
                                    />

                                </Grid2>
                                <Grid2 item xs={6} md={12}>
                                    <Divider sx={{margin: "1rem"}} />
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
