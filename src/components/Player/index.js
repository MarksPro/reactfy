import React from 'react';
import {Container, Current, Volume, Progress, Controls, Time, ProgressSlider} from './style';
import volumeIcon from '../../assets/images/volume.svg';
import Slider from 'rc-slider';

import shuffleIcon from '../../assets/images/shuffle.svg';
import backwardIcon from '../../assets/images/backward.svg';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import forwardIcon from '../../assets/images/forward.svg';
import repeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://http2.mlstatic.com/cd-nickelback-dark-horse-963280-D_NQ_NP_694115-MLB25206899986_122016-F.jpg" alt="Nickelback"/>
      <div>
        <span>Someday</span>
        <small>Nickelback</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={shuffleIcon} alt="aleatorio"/>
        </button>
        <button>
          <img src={backwardIcon} alt="voltar"/>
        </button>
        <button>
          <img src={playIcon} alt="iniciar"/>
        </button>
        <button>
          <img src={forwardIcon} alt="proxima"/>
        </button>
        <button>
          <img src={repeatIcon} alt="repetir"/>
        </button>
      </Controls>
      <Time>
        <spam>1:39</spam>
        <ProgressSlider>
          <Slider
            railStyle={{background: '#404040', borderRadius: 10}}
            trackStyle={{background: '#1ed760'}}
            handleStyle={{border: 0}}
          />
        </ProgressSlider>
        <spam>4:24</spam>
      </Time>
    </Progress>

    <Volume>
      <img src={volumeIcon} alt="Volume"/>
      <Slider
        railStyle={{background: '#404040', borderRadius: 10}}
        trackStyle={{background: '#fff'}}
        handleStyle={{display: 'none'}}
        value={50}
      />
    </Volume>
  </Container>
);

export default Player;