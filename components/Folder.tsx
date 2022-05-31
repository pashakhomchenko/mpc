import React, { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";

interface FolderProps {
  name: string;
  children?: React.ReactNode;
}

const Folder = ({ name, children }: FolderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <h2 className="flex items-center w-fit" onClick={() => setOpen(!open)}>
        {open ? <GoTriangleDown /> : <GoTriangleRight />}
        {open ? (
          <AiOutlineFolderOpen size={25} className="mr-1" />
        ) : (
          <AiOutlineFolder size={25} className="mr-1" />
        )}
        {name}
      </h2>
      {open ? <div className="flex flex-col ml-5">{children}</div> : null}
    </React.Fragment>
  );
};

export default Folder;
