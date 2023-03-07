import { useRef, useState } from "react";

function PlayerBar({ src }: any) {
	// we'll define state in parent component:
	const [playing, setPlaying] = useState(false);

	// state will be passed as props and setter function will allow child components to change state:
	return (
		<div>
			<Player src={src} playing={playing} />
		</div>
	);
}

function Player({ playing, src }: any) {
	const ref = useRef(null);
	//@ts-ignore
	if (ref.current) playing ? ref.current.play() : ref.current.pause();
	//updates audio element only on seekTime change (and not on each rerender):
	//@ts-ignore
	return <audio src={src} ref={ref} />;
}

export default PlayerBar;
