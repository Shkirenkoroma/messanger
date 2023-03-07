import { useRef, useEffect, useState } from "react";

function PlayerBar({src}:any) {
  // we'll define state in parent component:
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0); // forces player to update its time
  const [appTime, setAppTime] = useState(0); // dictated by player, broadcasted to other components

  // state will be passed as props and setter function will allow child components to change state:
  return (
    <div>
      <button onClick={() => setPlaying(true)}>PLAY</button>
      <button onClick={() => setPlaying(false)}>PAUSE</button>
      <button onClick={() => setSeekTime(appTime - 5)}>-5 SEC</button>
      <button onClick={() => setSeekTime(appTime + 5)}>+5 SEC</button>
      <Seekbar
        value={appTime}
        min="0"
        max={duration}
        onInput={(event:any) => setSeekTime(event.target.value)}
      />
      <Player
      src={src}
        playing={playing}
        seekTime={seekTime}
        onTimeUpdate={(event:any) => setAppTime(event.target.currentTime)}
        onLoadedData={(event:any) => setDuration(event.target.duration)}
      />
    </div>
  );
}

function Seekbar({ value, min, max, onInput }:any) {
  return (
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onInput={onInput}
    />
  );
}

function Player({ playing, seekTime, onTimeUpdate, onLoadedData, src }:any) {
  const ref = useRef(null);
  //@ts-ignore
  if (ref.current) playing ? ref.current.play() : ref.current.pause();
  //updates audio element only on seekTime change (and not on each rerender):
   //@ts-ignore
  useEffect(() => (ref.current.currentTime = seekTime), [seekTime]);
  return (
    <audio
      src={src}
      ref={ref}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
}

export default PlayerBar;
