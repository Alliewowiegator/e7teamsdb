import React from "react";
import {
    Card, CardActions, Avatar,
    Button, IconButton, CardHeader
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {allHeroInfo} from "../data/heroData";

export default function CompHeroCard(props) {
    function getHeroPortrait(heroName) {
        if (heroName) {
            let heroToReturn = allHeroInfo.find((hero) => hero.value === heroName);
            return heroToReturn.image;
        }
    }

    return (
        <Card sx={{backgroundColor: "#1e1e1e"}}>
            <CardHeader
                avatar={<Avatar src={getHeroPortrait(props.heroInfo.name)}/>}
                title={
                    props.heroInfo.name ? props.heroInfo.name : "Awaiting Selection..."
                }
                subheader={props.index >= 0 ? `Hero ${props.index + 2}` : `Hero 1`}
                action={
                    props.index >= 0 ? (
                        <IconButton
                            color="error"
                            aria-label="delete"
                            onClick={() => props.removeHero(props.heroInfo.id)}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    ) : null
                }
            />
            <CardActions sx={{justifyContent: "center"}}>
                <Button
                    onClick={() => props.openEditModal(props.heroInfo.id, props.index)}
                    sx={{color: "#D46F94"}}
                >
                    {props.heroInfo.name ? "Edit Hero Stats" : "Select and Edit Hero"}
                </Button>
            </CardActions>
        </Card>
    );
}
