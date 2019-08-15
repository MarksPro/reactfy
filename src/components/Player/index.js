import React from 'react';
import {Container, Current, Volume, Progress, Controls, Time, ProgressSlider} from './style';
import Slider from 'rc-slider';
import Sound from 'react-sound';

// CONNECT TO REDUX
import {connect} from 'react-redux';
import {Creators as PlayerActions} from '../../store/ducks/player';
import {bindActionCreators} from 'redux';

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
          onFinishedPlaying={props.next}
          onPlaying={props.playing}
          position={props.player.position}
        />
    }

    <Current>
      {!!props.player.currentSong &&
        <>
          <img src={props.player.currentSong.thumbnail} alt={props.player.currentSong.title}/>
          <div>
            <span>{props.player.currentSong.title}</span>
            <small>{props.player.currentSong.author}</small>
          </div>
        </>
      }
     
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={shuffleIcon} alt="aleatorio"/>
        </button>
        <button onClick={props.prev}>
          <img src={backwardIcon} alt="voltar"/>
        </button>

        {!!props.player.currentSong && props.player.status === Sound.status.PLAYING
          ? (
            <button onClick={props.pause}>
                <img src={pauseIcon} alt="pausar"/>
            </button>
            ) 
          : (
            <button onClick={props.play}>
              <img src={playIcon} alt="iniciar"/>
             </button>
            )
        }
        
        <button onClick={props.next}>
          <img src={forwardIcon} alt="proxima"/>
        </button>
        <button>
          <img src={repeatIcon} alt="repetir"/>
        </button>
      </Controls>
      <Time>
        <span>{props.positionShown || props.position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{background: '#404040', borderRadius: 10}}
            trackStyle={{background: '#1ed760'}}
            handleStyle={{border: 0}}
            max="1000"
            onChange={value => props.handlePosition(value / 1000)}
            onAfterChange={value => props.setPosition(value / 1000)}
            value={props.progress}
          />
        </ProgressSlider>
        <span>{props.duration}</span>
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
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string
    }),
    status: PropTypes.string,
  }).isRequired,
  position: PropTypes.string,
  duration: PropTypes.string,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  positionShown: PropTypes.string,
  progress: PropTypes.string
}

const msToTime = (duration) => {
  if(!duration) return null;
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60) % 60), 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress: parseInt(
    (state.player.positionShown || state.player.position) * (1000 / state.player.duration),
    10,
  ) || 10,
})

const mapDispatchToProps = dispatch => 
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);