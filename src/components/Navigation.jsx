import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navigation(){
    return(
        <AppBar position="fixed" sx={{ flexGrow: 1,backgroundColor: "rgba(40,40,40,0.9)", backdropFilter: "blur(8px)"}}>
            <Toolbar>
            <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}>Apoorva Dixit</Typography>
            <Button color="inherit" variant="contained" sx={{mx:2}}>Home</Button>
            <Button color="inherit" variant="contained" sx={{mx:2}}>Experience</Button>
            <Button color="inherit" variant="contained" sx={{mx:2}}>Projects</Button>
            <Button color="inherit" variant="contained" sx={{mx:2}}>Skills</Button>
            <Button color="inherit" variant="contained" sx={{mx:2}}>Contact</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;