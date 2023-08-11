import Folder from "./Folder";
import Loop from "./Loop";
import { useDrop } from "react-dnd";

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
      <Folder name="How to use the player">
        {props.isDesktop ? (
          <p>
            Click on loops folder bellow, grab any loop and drop it on the grid.
            Press on it to start playing it. Drop more loops on the grid and mix
            them. To remove a loop just drop in onto file browser. Loops will
            automatically sync up. You can also use playback controls in the top
            right corner.
          </p>
        ) : (
          <p>To get the full experience visit this website on desktop</p>
        )}
      </Folder>
      {props.isDesktop ? (
        <Folder name="loops">
          <Folder name="bass">
            <Loop src="audio/bass/merciless_bass.mp3" />
            <Loop src="audio/bass/manifest_bass.mp3" />
            <Loop src="audio/bass/new_year_bass.mp3" />
          </Folder>
          <Folder name="chords">
            <Loop src="audio/chords/merciless_chords.mp3" />
            <Loop src="audio/chords/gf_rhodes.mp3" />
            <Loop src="audio/chords/manifest_pad.mp3" />
            <Loop src="audio/chords/new_year_halftime.mp3" />
          </Folder>
          <Folder name="drums">
            <Loop src="audio/drums/drums_1.mp3" />
            <Loop src="audio/drums/drums_2.mp3" />
            <Loop src="audio/drums/drums_3.mp3" />
            <Loop src="audio/drums/drums_4.mp3" />
          </Folder>
          <Folder name="leads">
            <Loop src="audio/leads/merciless_flute.mp3" />
            <Loop src="audio/leads/merciless_lead.mp3" />
            <Loop src="audio/leads/gf_flute.mp3" />
            <Loop src="audio/leads/manifest_keys.mp3" />
            <Loop src="audio/leads/new_year_bells_1.mp3" />
          </Folder>
          <Folder name="melodies">
            <Loop src="audio/melodies/gf_pluck.mp3" />
            <Loop src="audio/melodies/manifest_guitar.mp3" />
            <Loop src="audio/melodies/new_year_bells_2.mp3" />
          </Folder>
        </Folder>
      ) : null}
    </div>
  );
};

export default FileBrowser;
