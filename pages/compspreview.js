import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  Stack,
  Button,
  IconButton,
  Divider,
  Modal,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

export default function CompPreview(props) {
  return (
    <Container maxWidth="lg">
      <Modal
        open={true}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={true}>
          <Card
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "50%",
              maxHeight: "100%",
              overflow: "hidden",
              padding: '2rem'
            }}
          >
            <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {props.heroes.map((hero, index) => {
                return (
                  <Grid2 key={index} item md={6} xs={4}>
                    <Card>
                      <CardContent>Test</CardContent>
                    </Card>
                  </Grid2>
                );
              })}
            </Grid2>
          </Card>
        </Fade>
      </Modal>
    </Container>
  );
}
