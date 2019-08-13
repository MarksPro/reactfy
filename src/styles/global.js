import {createGlobalStyle} from 'styled-components';
import 'rc-slider/assets/index.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background: #181818;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;