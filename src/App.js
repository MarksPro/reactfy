import React from 'react';
import GlobalStyle from './styles/global';
import {Wrapper, Container, Content} from './styles/components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <Container>
          <Sidebar/>
          <Content>
            <Header/>
          </Content>
        </Container>
        <Player/>
      </Wrapper>
    </>
  );
}

export default App;
