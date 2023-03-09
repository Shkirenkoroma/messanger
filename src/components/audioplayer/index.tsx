import { useRef, useState } from "react";

const PlayerBar = ({ src }: any) => {
	const [playing, setPlaying] = useState(false);
	return (
		<div>
			<Player src={src} playing={playing} />
		</div>
	);
};

const Player = ({ playing, src }: any) => {
	const ref = useRef(null);
	//@ts-ignore
	if (ref.current) playing ? ref.current.play() : ref.current.pause();
	return <audio src={src} ref={ref} />;
};

export default PlayerBar;
