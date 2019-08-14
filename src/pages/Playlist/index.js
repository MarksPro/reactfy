import React, {Component} from 'react';
import {Container, Header, SongList} from './style';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

// CONNECT TO REDUX
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as PlaylistsDetailsActions} from '../../store/ducks/playlistDatail';
import {Creators as PlayerActions} from '../../store/ducks/player';

import PropTypes from 'prop-types';

import Loading from '../../components/Loading';

class Playlist extends Component {

  static propTypes = {
    loadSong: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlaylistsDetailRequest: PropTypes.func.isRequired,
    playlistDatails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string
        })),
      }),
      loading: PropTypes.bool
    }).isRequired
  }

  componentDidMount(){
    this.loadPlaylistDetails()
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.id !== this.props.match.params.id)
      this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const {id} = this.props.match.params;
    this.props.getPlaylistsDetailRequest(id);
  }

  renderDetails = () => {
    const playlist = this.props.playlistsDetails.data
    return (
      <Container>
        <Header>
         <img src={playlist.thumbnail} alt={playlist.title}/>
         <div>
           <span>Playlist</span>
           <h1>{playlist.title}</h1>
           {!!playlist.songs && 
            <p>{playlist.songs.length} Músicas</p>
           }
          
           <button>Play</button>
         </div>
        </Header>
        <SongList cellPadding="0" cellSpacing="0">
          <thead>
            <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th> <img src={ClockIcon} alt="Duração"/> </th>
          </thead>
          <tbody>
           {!playlist.songs 
            ? <tr>
                <td colSpan="5">Nenhuma música cadastrada</td>
              </tr>
            : (
              playlist.songs.map(song => (
                <tr key={song.id} onDoubleClick={() => this.props.loadSong(song)}>
                  <td><img src={PlusIcon} alt="adicionar"/></td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>4:24</td>
                </tr>
              ))
            )
           } 
          </tbody>
        </SongList>
      </Container>
    )
  }

  render(){
    return (
      <>
        {this.props.playlistsDetails.loading
          ?  <Container loading> <Loading/> </Container>
          :  this.renderDetails()
        }
     </>
    );
  }
}
 
const mapStateToProps = state => ({
  playlistsDetails: state.playlistsDetails
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({...PlaylistsDetailsActions, ...PlayerActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);