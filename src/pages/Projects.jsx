import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub"
import { FaFire,FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel,IoLogoJavascript } from "react-icons/io5";
import LaunchIcon from '@mui/icons-material/Launch';

function Projects(){
    return(
        <Container sx={{mt:15}}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">Projects</Typography>
            <Typography variant="h6" sx={{mt:2}} textAlign="center">Projects that demonstrate my problem-solving skills and experience with modern web technologies.</Typography>
            <Stack direction="row" spacing={2} sx={{mt:5}} gap={2}>
                <Card sx={{ maxWidth: 345,cursor: "pointer","&:hover": {transform: "scale(1.05)",boxShadow: 6}}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/syncro.png"
                        title="Syncro"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Syncro
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Syncro is a project and task management web app built with React, Redux and Firebase. It allows users to create projects, manage tasks within each project, and track task completion with a clean and minimal UI.
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{mt:1}}><IoLogoJavascript size={20}/> <FaReact size={20}/> <SiRedux size={20}/> <FaFire size={20}/> <SiTailwindcss size={20}/> <IoLogoVercel size={20}/> </Stack>
                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small"
                        component="a"
                        href="https://github.com/Apoorva65/react_syncro"
                        target="_blank"
                        rel="noopener noreferrer">
                            <GitHubIcon/>
                        </Button>
                        <Button 
                        size="small"
                        component="a"
                        href="https://react-syncro.vercel.app/login"
                        target="_blank"
                        rel="noopener noreferrer"><LaunchIcon/></Button>
                    </CardActions>
                    </Card>

                <Card sx={{ maxWidth: 345,cursor: "pointer","&:hover": {transform: "scale(1.05)",boxShadow: 6}}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/notenest.png"
                        title="Note Nest"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        NoteNest
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        NoteNest is an offline-first notes application built with React that supports creating, editing, searching, and deleting notes with automatic saving, using React Router for navigation and LocalStorage for persistent storage.
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{mt:1}}><IoLogoJavascript size={20}/> <FaReact size={20}/> <SiTailwindcss size={20}/> <IoLogoVercel size={20}/> </Stack>
                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small"
                        component="a"
                        href="https://github.com/Apoorva65/NoteNest"
                        target="_blank"
                        rel="noopener noreferrer">
                            <GitHubIcon/>
                        </Button>
                        <Button 
                        size="small"
                        component="a"
                        href="https://note-nest-alpha.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"><LaunchIcon/></Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345,cursor: "pointer","&:hover": {transform: "scale(1.05)",boxShadow: 6}}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/cost.png"
                        title="CostIQ"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        CostIQ
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        CostIQ is a simple expense management web application built with React. It allows users to track daily expenses, categorize them, view summaries, and manage data with full CRUD functionality.
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{mt:1}}><IoLogoJavascript size={20}/> <FaReact size={20}/> <FaCss3Alt size={20}/> <IoLogoVercel size={20}/> </Stack>
                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small"
                        component="a"
                        href="https://github.com/Apoorva65/CostIQ"
                        target="_blank"
                        rel="noopener noreferrer">
                            <GitHubIcon/>
                        </Button>
                        <Button 
                        size="small"
                        component="a"
                        href="https://cost-iq.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"><LaunchIcon/></Button>
                    </CardActions>
                </Card>
                </Stack>
        </Container>
    )
}

export default Projects;