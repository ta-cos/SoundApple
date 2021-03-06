import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css'

const Player = ({ prop }) => {

  return (
    <AudioPlayer
      src={prop}
      showJumpControls={false}
      layout="stacked"
      customProgressBarSection={[]}
      customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
      autoPlayAfterSrcChange={false}
    />
  )
};

export default Player;
