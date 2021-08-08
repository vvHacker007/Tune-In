import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: 'pages.join',
    CREATE: 'pages.create',
};

export default function Info(props){
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo(){
        return (
        <div>
            <p>Tune in is a Collaborative Music Playing Systems where multiple guests can join a room and enjoy the song being played. Tune in uses spotify api, which requires the host to login to spotify. The guests can pause and vote to skip the current song only if the host of the room owns a spotify premium account.</p>
            <h4>Join Page</h4>
            <p>Guests can join an existing room using the 6 letter room-code.</p>
        </div>);
    }

    function createInfo(){
        return (
            <div>
                <p>Tune in is a Collaborative Music Playing Systems where multiple guests can join a room and enjoy the song being played. Tune in uses spotify api, which requires the host to login to spotify. The guests can pause and vote to skip the current song only if the host of the room owns a spotify premium account.</p>
                <h6>It is recommended for the hosts to have a spotify premium account</h6>
                <h4>Create Page</h4>
                <p>Hosts can create and mange their rooms using their spotify account.</p>
            </div>);
    }

    useEffect(() => {
        console.log("ran")
        return () => console.log("cleanup");
    });

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    What is Tune In?
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    { page === pages.JOIN ? joinInfo() : createInfo()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton onClick={() => {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);}}>
                    {page === pages.CREATE ? (<NavigateBeforeIcon/>) : (<NavigateNextIcon/>)}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}