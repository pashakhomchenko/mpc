import { AiOutlineLink } from "react-icons/ai";

interface ProjectProps {
  name: string;
  link: string;
  description: string;
}

const Project = (props: ProjectProps) => {
  return (
    <div>
      <h1 className="flex gap-2 items-center">
        {props.name}
        <a href={props.link} target="_blank">
          <AiOutlineLink size={20} />
        </a>
      </h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
