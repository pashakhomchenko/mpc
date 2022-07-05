import Folder from "./Folder";
import Picture from "./Picture";
import Experience from "./Experience";
import Loop from "./Loop";
import { useDrop } from "react-dnd";
import Retrato_de_Juan_Pareja from "/public/images/Retrato_de_Juan_Pareja_by_Diego_Velázquez.jpg";
import The_Trinity from "/public/images/The_Trinity_by_Andrei_Rublev.jpg";
import Melencolia from "/public/images/Melencolia_I_by_Albrecht_Dürer.jpg";

const FileBrowser = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Loop",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: any) => {
      return { id: -1 };
    },
  }));

  return (
    <div
      ref={drop}
      className="font-Michroma text-base grow border-2 border-black py-4 px-2 overflow-scroll"
    >
      <Folder name="about">learner | builder | producer | CS @ Umich</Folder>
      <Folder name="loops">
        <Folder name="bass">
          <Loop src="audio/bass/merciless_bass.mp3" />
        </Folder>
        <Folder name="chords">
          <Loop src="audio/chords/merciless_chords.mp3" />
        </Folder>
        <Folder name="drums">
          <Loop src="audio/drums/lofi2_drums.mp3" />
          <Loop src="audio/drums/140_drums.mp3" />
        </Folder>
        <Folder name="leads">
          <Loop src="audio/leads/merciless_flute.mp3" />
          <Loop src="audio/leads/merciless_lead.mp3" />
        </Folder>
        <Folder name="melodies">
          <Loop src="audio/melodies/lofi2.mp3" />
        </Folder>
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
