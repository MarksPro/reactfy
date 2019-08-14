import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// STYLE COMPONENTS
import {Container, NewPlaylist, Nav} from './style';
import Loading from '../Loading';

// CONNECT TO REDUX
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as PlaylistsActions} from '../../store/ducks/playlists';

// IMPORT VALIDATION TO PROPS
import PropTypes from 'prop-types';

import addPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component{

  // VALIDATION
  static propTypes = {
    loading: PropTypes.bool,
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      }))
    }).isRequired
  }

  componentDidMount(){
    this.props.getPlaylistsRequest();
  }

  render(){
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>
    
          <Nav>
            <li>
              <span>Sua biblioteca</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Álbums</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos locais</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>
    
          <Nav>
            <li>
              <span>Playlists</span>
              {this.props.playlists.loading && <Loading/>}
            </li>
            {this.props.playlists.data.map(item => (
                <li key={item.id}>
                  <Link to={`playlists/${item.id}`}>{item.title}</Link>
                </li>
              ))
            }
            
          </Nav>
        </div>
        <NewPlaylist>
          <img src={addPlayListIcon} alt="adicionar playlist"/>
          Nova playlist
        </NewPlaylist>    
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);