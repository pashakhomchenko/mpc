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
      className={`cursor-grab	${isDragging ? "cursor-grabbing" : ""}`}
    >
      <div>{src.split("/").pop()}</div>
    </div>
  );
};

export default Loop;
