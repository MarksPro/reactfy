import React from 'react';

import {Container, Search, User} from './style';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Pesquisar"/>
    </Search>
    <User>
      <img src="https://avatars3.githubusercontent.com/u/14079731?v=4" alt="Avatar"/>
      Marcos Roberto
    </User>
  </Container>
);

export default Header;