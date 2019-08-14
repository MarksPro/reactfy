import React from 'react';
import {Container, Title, List, Playlist} from '../Browse/style';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img src="https://http2.mlstatic.com/cd-nickelback-dark-horse-963280-D_NQ_NP_694115-MLB25206899986_122016-F.jpg" alt="Nickelback"/>
        <strong>Nickelback</strong>
        <p>Nickelback é uma banda de rock do Canadá formada em Hanna em 1995 por Chad Kroeger, Mike Kroeger, Ryan Peake e Brandon Kroeger.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://http2.mlstatic.com/cd-nickelback-dark-horse-963280-D_NQ_NP_694115-MLB25206899986_122016-F.jpg" alt="Nickelback"/>
        <strong>Nickelback</strong>
        <p>Nickelback é uma banda de rock do Canadá formada em Hanna em 1995 por Chad Kroeger, Mike Kroeger, Ryan Peake e Brandon Kroeger.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://http2.mlstatic.com/cd-nickelback-dark-horse-963280-D_NQ_NP_694115-MLB25206899986_122016-F.jpg" alt="Nickelback"/>
        <strong>Nickelback</strong>
        <p>Nickelback é uma banda de rock do Canadá formada em Hanna em 1995 por Chad Kroeger, Mike Kroeger, Ryan Peake e Brandon Kroeger.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://http2.mlstatic.com/cd-nickelback-dark-horse-963280-D_NQ_NP_694115-MLB25206899986_122016-F.jpg" alt="Nickelback"/>
        <strong>Nickelback</strong>
        <p>Nickelback é uma banda de rock do Canadá formada em Hanna em 1995 por Chad Kroeger, Mike Kroeger, Ryan Peake e Brandon Kroeger.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;