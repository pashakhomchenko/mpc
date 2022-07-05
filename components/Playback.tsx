interface PlaybackProps {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
}

const Playback = (props: PlaybackProps) => {
  return (
    <div className="flex h-[var(--top)] justify-end items-begin">
      <div className="bg-gray-light w-64 h-16 flex justify-center items-center gap-9">
        <button
          onClick={props.play}
          className={`arrow-right drop-shadow-lg ${
            props.isPlaying ? "border-l-green" : "border-l-gray-dark"
          }`}
        ></button>
        <button
          onClick={props.pause}
          className={`h-10 w-10 drop-shadow-lg ${
            props.isPlaying ? "bg-gray-dark" : "bg-red"
          }`}
        ></button>
      </div>
    </div>
  );
};

export default Playback;
