import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { Status } from "./Controller";

interface SquareProps {
  id: number;
  status: Status;
  changeStatus: (id: number, newStatus: Status) => void;
}

const Square = (props: SquareProps) => {
  const [src, setSrc] = useState("");
  const [sound, setSound] = useState(
    new Howl({ src: ["audio/silence.mp3"], loop: true })
  );

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
        if (monitor.didDrop() && monitor.getDropResult().id !== props.id) {
          props.changeStatus(props.id, Status.empty);
          setSrc("");
        }
      },
    }),
    [src] // this is why src is updated in item
  );
  const ref = useRef<HTMLDivElement>(null);
  drag(drop(ref));

  useEffect(() => {
    sound.fade(1, 0, 10);
    setTimeout(() => {
      sound.stop();
    }, 10);
    if (src !== "") {
      props.changeStatus(props.id, Status.inactive);
      setSound(new Howl({ src: [src], loop: true }));
    }
  }, [src]);

  useEffect(() => {
    if (props.status !== Status.empty) {
      if (props.status === Status.playing) {
        sound.play();
        sound.fade(0, 1, 10);
        console.log("play");
      } else {
        sound.fade(1, 0, 10);
        setTimeout(() => {
          sound.stop();
        }, 10);
        console.log("pause");
      }
    }
  }, [props.status]);

  const HandleClick = () => {
    if (props.status !== Status.empty) {
      if (props.status === Status.playing) {
        props.changeStatus(props.id, Status.inactive);
      } else {
        props.changeStatus(props.id, Status.playing);
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`bg-gray-dark w-24 h-24 drop-shadow-lg truncate text-white text-xs p-2 select-none 
      ${props.status !== Status.empty ? "bg-blue" : ""} 
      ${props.status === Status.paused ? "bg-orange" : ""}
      ${props.status === Status.playing ? "bg-red" : ""} 
      ${isOver ? "opacity-50" : ""} `}
      onClick={() => HandleClick()}
    >
      {src.split("/").pop()}
    </div>
  );
};

export default Square;
