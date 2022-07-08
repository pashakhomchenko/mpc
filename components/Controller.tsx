import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import Playback from "../components/Playback";

export enum Status {
  empty = "EMPTY",
  inactive = "INACTIVE",
  staged = "STAGED",
  paused = "PAUSED",
  playing = "PLAYING",
}

const bpm = 140;
const bars = 16;
const quanizeTime = (60 / bpm) * bars * 1000;

const Controller = () => {
  const [status, setStatus] = useState(
    Array.from({ length: 16 }, (_, i) => Status.empty)
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const timer = new Event("timer");
      dispatchEvent(timer);
      const interval = setInterval(() => {
        dispatchEvent(timer);
      }, quanizeTime);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const changeStatus = (id: number, newStatus: Status) => {
    setStatus((oldStatus) => {
      return [...oldStatus.slice(0, id), newStatus, ...oldStatus.slice(id + 1)];
    });
  };

  const play = () => {
    setIsPlaying(true);
    setStatus((oldStatus) => {
      return oldStatus.map((value) => {
        return value === Status.paused ? Status.playing : value;
      });
    });
  };

  const pause = () => {
    setIsPlaying(false);
    setStatus((oldStatus) => {
      return oldStatus.map((value) => {
        return value === Status.playing ? Status.paused : value;
      });
    });
  };

  return (
    <React.Fragment>
      <Playback play={play} pause={pause} isPlaying={isPlaying} />
      <Grid
        status={status}
        changeStatus={changeStatus}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </React.Fragment>
  );
};

export default Controller;
