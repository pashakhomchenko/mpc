import Folder from "./Folder";
import Picture from "./Picture";
import Retrato_de_Juan_Pareja from "../public/images/Retrato_de_Juan_Pareja_by_Diego_Velázquez.jpg";
import The_Trinity from "../public/images/The_Trinity_by_Andrei_Rublev.jpg";

const FileBrowser = () => {
  return (
    <div className="font-Michroma text-xl grow border-2 border-black p-4 overflow-scroll">
      <Folder name="about">learner | builder | producer | CS @ Umich</Folder>
      <Folder name="experience">
        Check out LinkedIn or resume for my experience. Personal websites are
        for fun staff!
      </Folder>
      <Folder name="projects"></Folder>
      <Folder name="books"></Folder>
      <Folder name="art">
        <Picture
          src={Retrato_de_Juan_Pareja}
          title="Retrato de Juan Pareja by Diego Velázquez.jpg"
        />
        <Picture src={The_Trinity} title="The Trinity by Andrei Rublev.jpg" />
      </Folder>
      <Folder name="watch list"></Folder>
      <Folder name="gallery"></Folder>
    </div>
  );
};

export default FileBrowser;
