import Pad from "./Pad";
import { Status } from "./Controller";

interface GridProps {
  status: Array<Status>;
  changeStatus: (id: number, newStatus: Status) => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  play: () => void;
}

const Grid = (props: GridProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6 bg-gray-light p-8">
      {props.status.map((status, i) => (
        <Pad
          key={i}
          id={i}
          status={status}
          changeStatus={props.changeStatus}
          isPlaying={props.isPlaying}
          setIsPlaying={props.setIsPlaying}
          play={props.play}
        />
      ))}
    </div>
  );
};

export default Grid;
