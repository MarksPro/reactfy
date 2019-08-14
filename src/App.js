import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

// Estilização geral e layout
import GlobalStyle from './styles/global';
import {Wrapper, Container, Content} from './styles/components';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';

import Routes from './routes';

// Logger
import './config/reactotron';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle/>
          <Wrapper>
            <Container>
              <Sidebar/>
              <Content>
                <Header/>
                <Routes/>
              </Content>
            </Container>
            <Player/>
          </Wrapper>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
