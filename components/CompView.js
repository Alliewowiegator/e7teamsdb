import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import {
    Card, CardContent, Typography, CardActions,
    Avatar, Stack, Button, IconButton, Divider, Modal, Fade, FormControl, InputLabel, Select, MenuItem, TextField
} from '@mui/material';

export default function CompPreview(props) {

    return (
      <Container maxWidth='lg'>
        <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={props.open}>
          <Card sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '65%', maxHeight: '55%', overflow: 'auto' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid2 item mdOffset={4.5}>
                    <Avatar src={props.name ? getHeroPortrait(props.name) : ''} sx={{ width: 24, height: 24 }} />
                  </Grid2>

                  <Grid2 item>
                    <Typography color="secondary">{props.name}</Typography>
                  </Grid2>
                </Grid2>
              </Typography>
              <Divider />
              <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid2 item md={3} mdOffset={1.5} xs={4}>
                  <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel id="necklace-main">Necklace Main Stat</InputLabel>
                    <Select
                      name="necklaceStat"
                      labelId="necklace-main"
                      id="necklaceStat"
                      label="Necklace Stat"
                      variant='standard'
                      onChange={(e) => props.handleInputChange(e, props.id)}
                      defaultValue={props.necklaceStat}
                    >
                      <MenuItem value={'Critical Hit Damage'}>Critical Hit Damage</MenuItem>
                      <MenuItem value={'Critical Hit Chance'}>Critical Hit Chance</MenuItem>
                      <MenuItem value={'Health %'}>Health %</MenuItem>
                      <MenuItem value={'Health'}>Health</MenuItem>
                      <MenuItem value={'Defense %'}>Defense %</MenuItem>
                      <MenuItem value={'Defense'}>Defense</MenuItem>
                      <MenuItem value={'Attack %'}>Attack %</MenuItem>
                      <MenuItem value={'Attack'}>Attack</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={3} xs={4}>
                  <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel id="ring-stat">Ring Main Stat</InputLabel>
                    <Select
                      name="ringStat" 
                      labelId="ring-stat"
                      id="ringStat"
                      label="Ring Stat"
                      variant='standard'
                      onChange={(e) => props.handleInputChange(e, props.id)}
                      defaultValue={props.ringStat}
                    >
                      <MenuItem value={'Effectiveness %'}>Effectiveness %</MenuItem>
                      <MenuItem value={'Effect Resistance %'}>Critical Hit Chance</MenuItem>
                      <MenuItem value={'Attack %'}>Attack %</MenuItem>
                      <MenuItem value={'Attack'}>Attack</MenuItem>
                      <MenuItem value={'Health %'}>Health %</MenuItem>
                      <MenuItem value={'Health'}>Health</MenuItem>
                      <MenuItem value={'Defense %'}>Defense %</MenuItem>
                      <MenuItem value={'Defense'}>Defense</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={3} xs={4}>
                  <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel id="boot-stat">Boot Main Stat</InputLabel>
                    <Select
                      name="bootStat"
                      labelId="boot-stat"
                      id="bootStat"
                      label="Boot Stat"
                      variant='standard'
                      defaultValue={props.bootStat}
                      onChange={(e) => props.handleInputChange(e, props.id)}
                    >
                      <MenuItem value={'Speed'}>Speed</MenuItem>
                      <MenuItem value={'Attack %'}>Attack %</MenuItem>
                      <MenuItem value={'Attack'}>Attack</MenuItem>
                      <MenuItem value={'Health %'}>Health %</MenuItem>
                      <MenuItem value={'Health'}>Health</MenuItem>
                      <MenuItem value={'Defense %'}>Defense %</MenuItem>
                      <MenuItem value={'Defense'}>Defense</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 item md={12} xs={4}>
                  <Divider />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='attack' defaultValue={props.attack ? props.attack : ''} fullWidth label="Attack" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='defense' defaultValue={props.defense ? props.defense : ''} fullWidth label="Defense" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='health' defaultValue={props.health ? props.health : ''} fullWidth label="Health" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='speed' defaultValue={props.speed ? props.speed : ''} fullWidth label="Speed" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='criticalHitChance' defaultValue={props.criticalHitChance ? props.criticalHitChance : ''} fullWidth label="Critical Hit Chance" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='criticalHitDamage' defaultValue={props.criticalHitDamage ? props.criticalHitDamage : ''} fullWidth label="Critical Hit Damage" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='effectiveness' defaultValue={props.effectiveness ? props.effectiveness : ''} fullWidth label="Effectiveness" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='effectResistance' defaultValue={props.effectResistance ? props.effectResistance : ''} fullWidth label="Effect Resistance" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} xs={4}>
                  <TextField name='dualAttackChance' defaultValue={props.dualAttackChance ? props.dualAttackChance : ''} fullWidth label="Dual Attack Chance" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
                <Grid2 item md={4} mdOffset={4} xs={4}>
                  <TextField name='power' defaultValue={props.power ? props.power : ''} fullWidth label="Combat Power" variant="standard" onChange={(e) => props.handleInputChange(e, props.id)} />
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
      </Container>
    )
}