import React, { useState, useEffect } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        const timer = new Event("timer");
        dispatchEvent(timer);
      }, 6857);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const setNewStatus = (id: number, newStatus: Status) => {
    setStatus((oldStatus) => {
      return [...oldStatus.slice(0, id), newStatus, ...oldStatus.slice(id + 1)];
    });
  };

  const changeStatus = (id: number, newStatus: Status) => {
    if (!isPlaying && newStatus === Status.playing) {
      setIsPlaying(true);
      setNewStatus(id, newStatus);
    }
    if (
      status[id] === Status.empty ||
      status[id] === Status.playing ||
      newStatus === Status.empty
    ) {
      setNewStatus(id, newStatus);
    } else {
      addEventListener("timer", () => setNewStatus(id, newStatus));
    }
    removeEventListener("timer", () => setNewStatus(id, newStatus));
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
      <Grid status={status} changeStatus={changeStatus} />
    </React.Fragment>
  );
};

export default Controller;
