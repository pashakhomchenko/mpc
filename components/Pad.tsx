import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Status } from "./Controller";

interface PadProps {
  id: number;
  status: Status;
  changeStatus: (id: number, newStatus: Status) => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  play: () => void;
}

const HowlOptions = {
  loop: true,
  pool: 0,
};

const FadeDuration = 50;

const Pad = (props: PadProps) => {
  const [src, setSrc] = useState("");
  const [sound, setSound] = useState(
    new Howl({ src: ["audio/silence.mp3"], ...HowlOptions })
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Loop",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: any) => {
      props.changeStatus(props.id, Status.inactive);
      setSrc(item.src);
      return { id: props.id };
    },
  }));
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "Loop",
      item: () => ({ src: src, seek: sound.seek() }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => src !== "",
      end: (item, monitor) => {
        if (
          monitor.didDrop() &&
          (monitor.getDropResult() as any).id !== props.id
        ) {
          props.changeStatus(props.id, Status.empty);
          setIsPlaying(false);
          setSrc("");
        }
      },
    }),
    [src] // this is why src is updated in item
  );
  const ref = useRef<HTMLDivElement>(null);
  drag(drop(ref));

  useEffect(() => {
    if (props.status === Status.empty) {
      sound.fade(1, 0, FadeDuration);
      setTimeout(() => {
        sound.stop();
      }, FadeDuration);
      sound.unload();
    } else {
      if (props.status === Status.inactive) {
        if (isPlaying) {
          sound.fade(0, 1, FadeDuration);
          setTimeout(() => {
            sound.stop();
          }, FadeDuration);
          setIsPlaying(false);
        } else {
          setSound(new Howl({ src: [src], ...HowlOptions }));
        }
      } else if (props.status === Status.playing) {
        sound.play();
        sound.fade(0, 1, FadeDuration);
        setIsPlaying(true);
      } else if (props.status === Status.paused) {
        sound.fade(1, 0, FadeDuration);
        setTimeout(() => {
          sound.stop();
        }, FadeDuration);
        setIsPlaying(false);
      }
    }
  }, [props.status]);

  useEffect(() => {
    if (isPlaying) {
      const statusCallback = () => {
        props.changeStatus(props.id, Status.playing);
      };
      addEventListener("timer", statusCallback);

      return () => {
        removeEventListener("timer", statusCallback);
      };
    }
  }, [isPlaying]);

  const HandleClick = () => {
    if (props.status !== Status.empty) {
      if (props.status === Status.playing) {
        props.changeStatus(props.id, Status.inactive);
      } else {
        props.isPlaying
          ? props.changeStatus(props.id, Status.staged)
          : props.changeStatus(props.id, Status.playing);
        props.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`w-24 h-24 drop-shadow-lg break-words text-white text-xs p-2 select-none 
      ${props.status === Status.empty ? "bg-gray-dark" : "bg-blue"} 
      ${props.status === Status.staged ? "bg-orange" : ""} 
      ${props.status === Status.paused ? "bg-red" : ""}
      ${props.status === Status.playing ? "bg-green" : ""} 
      ${isOver ? "opacity-50" : ""} `}
      onClick={() => HandleClick()}
    >
      {src.split("/").pop()?.split(".").at(0)}
    </div>
  );
};

export default Pad;
