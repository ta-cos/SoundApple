import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Player.css'

const Player = ({ prop }) => {

  const [playState, setPlayState] = useState(false);
  return (
    <AudioPlayer
      src={prop}
      onPlay={e => setPlayState(true)}
      showJumpControls={false}
      layout="stacked"
      customProgressBarSection={[]}
      customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
      autoPlayAfterSrcChange={false}
    />
  )
};

export default Player;
