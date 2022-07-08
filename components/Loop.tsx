import { useDrag } from "react-dnd";

interface LoopProps {
  src: string;
}

const Loop = ({ src }: LoopProps) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "Loop",
      item: () => ({ src: src }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [src]
  );

  return (
    <div
      ref={drag}
      className={`my-3 bg-blue w-24 h-24 drop-shadow-lg break-words text-white text-xs p-2 select-none cursor-grab	${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      <div>{src.split("/").pop()?.split(".").at(0)}</div>
    </div>
  );
};

export default Loop;
