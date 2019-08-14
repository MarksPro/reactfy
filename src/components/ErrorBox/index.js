import React from 'react';

import CloaseIcon from '../../assets/images/close.svg';

// CONNECT TO REDUX
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as ErrorActions} from '../../store/ducks/error';

import PropTypes from 'prop-types';

import {Container, Btn} from './style';

const ErrorBox = ({error: {message, visible}, hideError}) => visible && (
  <Container>
    <p>{message}</p>
    <Btn onClick={hideError}>
      <img src={CloaseIcon} alt="fechar"/>
    </Btn>
  </Container>
)

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool
  }).isRequired
}

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);