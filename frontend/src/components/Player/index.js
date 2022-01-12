import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
  <AudioPlayer
    src="https://www.bensound.com/royalty-free-music/2#:~:text=00%3A00-,DOWNLOAD,-Slow%20ambient%20cinematic"
    onPlay={e => console.log("onPlay")}
    showJumpControls={false}
    layout="stacked"
    customProgressBarSection={[]}
    customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
    autoPlayAfterSrcChange={false}
  // other props here
  />
);

export default Player;
