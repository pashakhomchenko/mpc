import { AiOutlineFile } from "react-icons/ai";

interface ExperienceProps {
  name: string;
  position: string;
  location: string;
  dates: string;
  description: string;
}

const Experience = ({
  name,
  position,
  location,
  dates,
  description,
}: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3>
        {name} <br /> {position} <br /> {location} <br /> {dates}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default Experience;
