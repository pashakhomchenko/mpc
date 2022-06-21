import React from "react";
import Grid from "../components/Grid";
import Playback from "../components/Playback";

const Controller = () => {
    return (
        <React.Fragment>
            <Playback />
            <Grid />
        </React.Fragment>
    );
}

export default Controller;