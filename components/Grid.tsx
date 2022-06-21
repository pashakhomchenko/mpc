import Square from "./Square";

const Grid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6 bg-gray-light p-8">
      {Array.from({ length: 16 }, (x, i) => i).map((_, i) => (<Square key={i} id={i} />))}
    </div>
  );
};

export default Grid;
