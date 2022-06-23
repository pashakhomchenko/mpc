import React, { useState } from "react";
import Grid from "../components/Grid";
import Playback from "../components/Playback";

export enum Status {
  empty = "EMPTY",
  inactive = "INACTIVE",
  paused = "PAUSED",
  playing = "PLAYING",
}

const Controller = () => {
  const [status, setStatus] = useState(
    Array.from({ length: 16 }, (_, i) => Status.empty)
  );

  const changeStatus = (id: number, newStatus: Status) => {
    setStatus((oldStatus) => {
      return [...oldStatus.slice(0, id), newStatus, ...oldStatus.slice(id + 1)];
    });
  };

  const play = () => {
    setStatus((oldStatus) => {
      return oldStatus.map((value) => {
        return value === Status.paused ? Status.playing : value;
      });
    });
  };

  const pause = () => {
    setStatus((oldStatus) => {
      return oldStatus.map((value) => {
        return value === Status.playing ? Status.paused : value;
      });
    });
  };

  return (
    <React.Fragment>
      <Playback play={play} pause={pause} />
      <Grid status={status} changeStatus={changeStatus} />
    </React.Fragment>
  );
};

export default Controller;
