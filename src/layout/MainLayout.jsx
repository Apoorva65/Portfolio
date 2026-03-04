import Container from "@mui/material/Container";
import React from "react";
import {Outlet} from 'react-router'
import Navigation from "../components/Navigation";

function MainLayout(){
    return(
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    )

}

export default MainLayout;