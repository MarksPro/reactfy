import React, {Component} from 'react';
import {Container, Title, List, Playlist} from '../Browse/style';
import Loading from '../../components/Loading';

// CONNECT TO REDUX
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as PlaylistsActions} from '../../store/ducks/playlists';

import PropTypes from 'prop-types';

class Browse extends Component {

  // VALIDATION
  static propTypes = {
    loading: PropTypes.bool,
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string
      }))
    }).isRequired
  }

  componentDidMount(){
    this.props.getPlaylistsRequest();
  }

  render(){
    return (
      <Container>
        <Title>Navegar {this.props.playlists.loading && <Loading/>}</Title>
        <List>
          {this.props.playlists.data.map(item => (
            <Playlist key={item.id} to={`/playlists/${item.id}`}>
              <img src={item.thumbnail} alt={item.title}/>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);