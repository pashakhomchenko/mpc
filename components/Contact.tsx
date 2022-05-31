import {
  FaTwitter,
  FaMailBulk,
  FaSoundcloud,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface BoxProps {
  children: React.ReactNode;
  last?: boolean; // neede for the right side bordr of the box
}

const Box = ({ children, last }: BoxProps) => {
  return (
    <div
      className={`flex border-2 border-r-0 border-black justify-center p-2 ${
        last ? "border-r-2" : ""
      }`}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="grid grid-cols-5 my-4">
      <Box>
        <a href="https://twitter.com/khomie_" target="_blank">
          <FaTwitter size={30} />
        </a>
      </Box>
      <Box>
        <a href="mailto:ahssssap@gmail.com" target="_blank">
          <FaMailBulk size={30} />
        </a>
      </Box>
      <Box>
        <a href="https://soundcloud.com/pashakhomchenko" target="_blank">
          <FaSoundcloud size={30} />
        </a>
      </Box>
      <Box>
        <a href="https://github.com/pashakhomchenko" target="_blank">
          <FaGithub size={30} />
        </a>
      </Box>
      <Box last>
        <a href="https://www.linkedin.com/in/pavel-khomchenko/" target="_blank">
          <FaLinkedin size={30} />
        </a>
      </Box>
    </div>
  );
};

export default Contact;
