import Folder from "./Folder";
import Picture from "./Picture";
import Experience from "./Experience";
import Loop from "./Loop";
import Retrato_de_Juan_Pareja from "/public/images/Retrato_de_Juan_Pareja_by_Diego_Velázquez.jpg";
import The_Trinity from "/public/images/The_Trinity_by_Andrei_Rublev.jpg";
import Melencolia from "/public/images/Melencolia_I_by_Albrecht_Dürer.jpg";

const FileBrowser = () => {
  return (
    <div className="font-Michroma text-base grow border-2 border-black py-4 px-2 overflow-scroll">
      <Folder name="about">learner | builder | producer | CS @ Umich</Folder>
      <Folder name="loops">
        <Loop src="audio/melodies/Alive.wav" />
        <Loop src="audio/melodies/Dystopia.wav" />
        <Loop src="audio/drums/drums1.wav" />
      </Folder>
      <Folder name="experience">
        <Experience
          name="Desai Accelerator"
          position="Software Development Intern"
          location="Ann Arbor, MI"
          dates="May 2022 - August 2022"
          description="Worked with 5 startups to solve their technical problems and improve on the product. Redeveloped frontend for web and mobile app, implemented SSO."
        />
      </Folder>
      <Folder name="projects"></Folder>
      <Folder name="reading list"></Folder>
      <Folder name="art gallery">
        <Picture
          src={Retrato_de_Juan_Pareja}
          title="Retrato de Juan Pareja by Diego Velázquez.jpg"
        />
        <Picture src={The_Trinity} title="The Trinity by Andrei Rublev.jpg" />
        <Picture src={Melencolia} title="Melencolia I by Albrecht Dürer.jpg" />
      </Folder>
      <Folder name="watch list"></Folder>
    </div>
  );
};

export default FileBrowser;
