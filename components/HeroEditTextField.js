import React from "react";
import { TextField } from "@mui/material";

export default function HeroEditTextField(props) {
  return (
    <TextField
      name={props.stat}
      defaultValue={
        props.heroInfo[props.stat] ? props.heroInfo[props.stat] : ""
      }
      fullWidth
      label={`${props.text}`}
      variant="standard"
      onChange={(e) =>
        props.handleInputChange(e, props.heroInfo.id)
      }
    />
  );
}
