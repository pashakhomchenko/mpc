import Folder from "./Folder";
import Picture from "./Picture";
import Experience from "./Experience";
import Loop from "./Loop";
import Project from "./Project";
import { useDrop } from "react-dnd";
import { AiOutlineArrowRight } from "react-icons/ai";
import Retrato_de_Juan_Pareja from "/public/images/Retrato_de_Juan_Pareja_by_Diego_Velázquez.jpg";
import The_Trinity from "/public/images/The_Trinity_by_Andrei_Rublev.jpg";
import Melencolia from "/public/images/Melencolia_I_by_Albrecht_Dürer.jpg";
import Judith from "/public/images/Judith_by_Giorgione.jpg";
import The_Garden_of_Earthly_Delights from "/public/images/The_Garden_of_Earthly_Delights_by_Hieronymus_Bosch.jpg";
import The_Son_of_Man from "/public/images/The_Son_of_Man_by_Rene_Magritte.jpg";
import Girl_with_a_Pearl_Earring from "/public/images/Girl_with_a_Pearl_Earring_by_Johannes_Vermeer.jpeg";

interface FileBrowserProps {
  isDesktop: Boolean;
}

const FileBrowser = (props: FileBrowserProps) => {
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
      <Folder name="about">
        <h3 className="mb-2">learning and having fun, CS @ Umich</h3>
        {props.isDesktop ? (
          <Folder name="How to use the player">
            <p>
              Click on loops folder bellow, grab any loop and drop it on the
              grid. Press on it to start playing it. Drop more loops on the grid
              and mix them. To remove a loop just drop in onto file browser.
              Loops will automatically sync up. You can also use playback
              controls in the top right corner.
            </p>
          </Folder>
        ) : (
          <p>To get the full experience visit this website on desktop</p>
        )}
      </Folder>
      {props.isDesktop ? (
        <Folder name="loops">
          <Folder name="bass">
            <Loop src="audio/bass/merciless_bass.mp3" />
            <Loop src="audio/bass/manifest_bass.mp3" />
          </Folder>
          <Folder name="chords">
            <Loop src="audio/chords/merciless_chords.mp3" />
            <Loop src="audio/chords/gf_rhodes.mp3" />
            <Loop src="audio/chords/manifest_pad.mp3" />
          </Folder>
          <Folder name="drums">
            <Loop src="audio/drums/drums_1.mp3" />
            <Loop src="audio/drums/drums_2.mp3" />
            <Loop src="audio/drums/drums_3.mp3" />
          </Folder>
          <Folder name="leads">
            <Loop src="audio/leads/merciless_flute.mp3" />
            <Loop src="audio/leads/merciless_lead.mp3" />
            <Loop src="audio/leads/gf_flute.mp3" />
            <Loop src="audio/leads/manifest_keys.mp3" />
          </Folder>
          <Folder name="melodies">
            <Loop src="audio/melodies/gf_pluck.mp3" />
            <Loop src="audio/melodies/manifest_guitar.mp3" />
          </Folder>
        </Folder>
      ) : null}
      <Folder name="experience">
        <Experience
          name="Desai Accelerator"
          position="Software Development Intern"
          location="Ann Arbor, MI"
          dates="May 2022 - August 2022"
          description="Executed on critical technical projects for 5 early-stage startups leading to cost reductions, additional funding and first revenue. Some of the work included redeveloping frontend for Django web app and React Native mobile app, implementing SSO for Microsoft Word add-in, enabling subscription functionality by integrating with Stripe, building automated test infrastructure with Cypress and adding push notifications using Firebase Cloud Messaging."
        />
      </Folder>
      <Folder name="projects">
        <Project
          name="V1 Michigan"
          link="https://v1michigan.com/"
          description="Creating a community of ambitious student builders at Michgan"
        />
        <Project
          name="Plinq"
          link="https://github.com/Delaminer/plinq"
          description="Personal CRM for students and professionals to manage their network and speed up email communication"
        />
        <Project
          name="Architectural Styles Predictor"
          link="https://architectural-styles-predictor.herokuapp.com/"
          description="Upload a picture of a building and get a prediction of its architectural style. Built with PyTorch and Flask."
        />
        <Project
          name="Twitter Ad Blocker"
          link="https://chrome.google.com/webstore/detail/twitter-ad-blocker/dhlbmiajajiiploeagcijnmnfiphgmdc"
          description="Got tired of all the garbage on Twitter and wrote a Chrome extension to block irrelevant ads, recommendations and news."
        />
      </Folder>
      {/* <Folder name="reading list"></Folder> */}
      <Folder name="art gallery">
        <Picture
          src={Retrato_de_Juan_Pareja}
          title="Retrato de Juan Pareja by Diego Velázquez.jpg"
        />
        <Picture src={The_Trinity} title="The Trinity by Andrei Rublev.jpg" />
        <Picture src={Melencolia} title="Melencolia I by Albrecht Dürer.jpg" />
        <Picture src={Judith} title="Judith by Giorgione.jpg" />
        <Picture
          src={The_Garden_of_Earthly_Delights}
          title="The Garden of Earthly Delights by Hieronymus Bosch.jpg"
        />
        <Picture
          src={The_Son_of_Man}
          title="The Son of Man by Rene Magritte.jpg"
        />
        <Picture
          src={Girl_with_a_Pearl_Earring}
          title="Girl with a Pearl Earring by Johannes Vermeer.jpg"
        />
      </Folder>
      <Folder name="watch list">
        <a
          href="https://letterboxd.com/pashakhomchenko/"
          target="_blank"
          className="flex gap-1 items-center w-fit"
        >
          <p>Letterboxd</p>
          <AiOutlineArrowRight size={20} />
        </a>
      </Folder>
    </div>
  );
};

export default FileBrowser;
