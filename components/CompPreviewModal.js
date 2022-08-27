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
  Paper
} from "@mui/material";
import { allHeroInfo } from '../data/heroData';

export default function CompPreviewModal(props) {

  function getHeroPortrait(heroName) {

    if (heroName) {
      let heroToReturn = allHeroInfo.find((hero) => hero.value === heroName);
      return heroToReturn.thumbnail;
    }
  }

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
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "50%",
              maxHeight: "100%",
              overflow: "auto",
              padding: '2rem'
            }}
          >
            <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid2 item md={12} xs={4}>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                  <Typography sx={{ fontSize: 17 }} color="primary">
                    {props.teamInfo.teamType}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }} color="primary">
                    {props.teamInfo.teamDescription}
                  </Typography>
                </Stack>
              </Grid2>
              {props.heroes.map((hero, index) => {
                return (
                  <Grid2 key={index} item md={6} xs={4}>
                    <Card sx={{ backgroundColor: '#1e1e1e' }}>
                      <CardContent>
                        <Stack direction="row" alignItems="center" spacing={2} paddingBottom='1rem' divider={<Divider orientation="vertical" flexItem />}>
                          <Avatar key={index} src={getHeroPortrait(hero.name)}></Avatar>
                          <Typography sx={{ fontSize: 17 }} color="primary" gutterBottom>
                            {hero.name}
                          </Typography>
                        </Stack>

                        <Typography sx={{ fontSize: 18, textAlign: 'center' }} color="secondary" gutterBottom>
                          Accessory Main Stats
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} paddingBottom='2rem'>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Necklace
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.necklaceStat}
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Ring
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.ringStat}
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Boot
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.bootStat}
                            </Typography>
                          </Typography>
                        </Stack>
                        <Divider />
                        <Typography sx={{ fontSize: 18, textAlign: 'center' }} color="secondary" gutterBottom>
                          Hero Stats
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} paddingBottom='2rem'>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Power
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.power}
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Attack
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.attack}
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Defense
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.defense}
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Health
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.health}
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Speed
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.speed}
                            </Typography>
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} paddingBottom='.5rem'>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Critical Hit Chance
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.criticalHitChance}%
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Critical Hit Damage
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.criticalHitDamage}%
                            </Typography>
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} paddingBottom='.5rem'>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Effectiveness
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.effectiveness}%
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Effect Resistance
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.effectResistance}%
                            </Typography>
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ textAlign: 'center' }}>
                            Dual Attack Chance
                            <Divider />
                            <Typography variant="body2" color="white">
                              {hero.dualAttackChance}%
                            </Typography>
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid2>
                );
              })}
              <Grid2 item md={12} xs={4}>
                <Paper>
                <Button
                    size="small"
                    color="success"
                    fullWidth
                    onClick={() => props.handleClose()}
                  >
                    Close Composition
                  </Button>
                </Paper>
              </Grid2>
            </Grid2>
          </Card>
        </Fade>
      </Modal>
    </Container>
  );
}
