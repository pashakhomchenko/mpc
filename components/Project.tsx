import { AiOutlineLink } from "react-icons/ai";

interface ProjectProps {
  name: string;
  link: string;
  description: string;
}

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col gap-2 my-3">
      <h3 className="flex gap-2 items-center">
        {props.name}
        <a href={props.link} target="_blank">
          <AiOutlineLink size={20} />
        </a>
      </h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
