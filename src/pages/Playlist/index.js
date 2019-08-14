import React from 'react';
import {Container, Header, SongList} from './style';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
     <img src="https://http2.mlstatic.com/cd-nickelback-dark-horse-963280-D_NQ_NP_694115-MLB25206899986_122016-F.jpg" alt="Nickelback"/>
     <div>
       <span>Playlist</span>
       <h1>Nickelback</h1>
       <p>3 Músicas</p>
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
        <tr>
          <td><img src={PlusIcon} alt="adicionar"/></td>
          <td>Someday</td>
          <td>Nickelback</td>
          <td>Dark Horse</td>
          <td>4:24</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="adicionar"/></td>
          <td>Someday</td>
          <td>Nickelback</td>
          <td>Dark Horse</td>
          <td>4:24</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="adicionar"/></td>
          <td>Someday</td>
          <td>Nickelback</td>
          <td>Dark Horse</td>
          <td>4:24</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;