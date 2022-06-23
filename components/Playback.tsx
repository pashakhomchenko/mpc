interface PlaybackProps {
  play: () => void;
  pause: () => void;
}

const Playback = (props: PlaybackProps) => {
  return (
    <div className="flex h-[var(--top)] justify-end items-begin">
      <div className="bg-gray-light w-64 h-16 flex justify-center items-center gap-9">
        <div onClick={props.play} className="arrow-right"></div>
        <div onClick={props.pause} className="bg-gray-dark h-10 w-10"></div>
      </div>
    </div>
  );
};

export default Playback;
