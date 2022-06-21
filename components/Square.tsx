import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

const Square = (id: number) => {
  const [src, setSrc] = useState("");
  const [sound, setSound] = useState(
    new Howl({ src: ["audio/silence.mp3"], loop: true })
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Loop",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: any) => {
      setSrc(item.src);
      return { id: id };
    },
  }));
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Loop",
    item: () => ({ src: src }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => src !== "",
    end: (item, monitor) => { if (monitor.didDrop() && monitor.getDropResult().id !== id) { setSrc("") } },
  }), [src]);
  const ref = useRef<HTMLDivElement>(null);
  drag(drop(ref))

  useEffect(() => {
    if (src !== "") {
      sound.fade(1, 0, 10);
      setTimeout(() => {
        sound.stop();
      }, 10);
      setIsPlaying(false);
      setSound(new Howl({ src: [src], loop: true }));
    }
  }, [src]);

  const HandleClick = () => {
    if (src !== "") {
      if (isPlaying) {
        sound.fade(1, 0, 10);
        setTimeout(() => {
          sound.stop();
        }, 10);
        setIsPlaying(false);
        console.log("pause");
        console.log(sound.duration());
      } else {
        sound.play();
        sound.fade(0, 1, 10);
        setIsPlaying(true);
        console.log("play");
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`w-24 h-24 drop-shadow-lg truncate text-white text-xs p-2 select-none 
      ${src !== "" ? "bg-blue" : "bg-gray-dark"} ${isPlaying ? "bg-red" : ""} ${isOver ? "opacity-50" : ""} `}
      onClick={() => HandleClick()}
    >
      {src.split("/").pop()}
    </div>
  );
};

export default Square;
