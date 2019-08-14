import React from 'react';
import {Container, Current, Volume, Progress, Controls, Time, ProgressSlider} from './style';
import Slider from 'rc-slider';
import Sound from 'react-sound';

// CONNECT TO REDUX
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import volumeIcon from '../../assets/images/volume.svg';
import shuffleIcon from '../../assets/images/shuffle.svg';
import backwardIcon from '../../assets/images/backward.svg';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import forwardIcon from '../../assets/images/forward.svg';
import repeatIcon from '../../assets/images/repeat.svg';

const Player = (props) => (
  <Container>
    {console.log("SOUND: ", !!props.player.currentSong ? 'vazio' : 'music')}
    
    {!!props.player.currentSong &&
        <Sound 
          url={props.player.currentSong.file}
          playStatus={props.player.status}
        />
    }

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

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired
}

const mapStateToProps = state => ({
  player: state.player
})

export default connect(mapStateToProps)(Player);