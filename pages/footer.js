import React from 'react';
import { Box, Link } from '@mui/system';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';

const Footer = () => (
    <footer>
        <Box sx={{position: 'fixed', bottom: 0, left: 0, backgroundColor: '', minWidth: '100%', textAlign: 'center', padding: '2rem'}}>
            <Container maxWidth='lg'>
                <Grid2 container spacing={5}>
                    <Grid2 item xs={12}>
                        Test
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    </footer>
);

export default Footer;
