import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

enum Status {
  empty = "empty",
  inactive = "inactive",
  paused = "paused",
  playing = "playing",
}

const Square = (id: number) => {
  const [src, setSrc] = useState("");
  const [sound, setSound] = useState(
    new Howl({ src: ["audio/silence.mp3"], loop: true })
  );
  const [status, setStatus] = useState(Status.empty);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Loop",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: any) => {
      setStatus(Status.inactive);
      setSrc(item.src);
      return { id: id };
    },
  }));
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "Loop",
      item: () => ({ src: src }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => src !== "",
      end: (item, monitor) => {
        if (monitor.didDrop() && monitor.getDropResult().id !== id) {
          setStatus(Status.empty);
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
      setStatus(Status.inactive);
      setSound(new Howl({ src: [src], loop: true }));
    }
  }, [src]);

  const HandleClick = () => {
    if (status !== Status.empty) {
      if (status === Status.playing) {
        sound.fade(1, 0, 10);
        setTimeout(() => {
          sound.stop();
        }, 10);
        setStatus(Status.inactive);
        console.log("pause");
        console.log(sound.duration());
      } else {
        sound.play();
        sound.fade(0, 1, 10);
        setStatus(Status.playing);
        console.log("play");
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`w-24 h-24 drop-shadow-lg truncate text-white text-xs p-2 select-none 
      ${status !== Status.empty ? "bg-blue" : "bg-gray-dark"} 
      ${status === Status.playing ? "bg-red" : ""} 
      ${isOver ? "opacity-50" : ""} `}
      onClick={() => HandleClick()}
    >
      {src.split("/").pop()}
    </div>
  );
};

export default Square;
