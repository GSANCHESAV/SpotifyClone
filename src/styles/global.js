import { createGlobalStyle } from 'styled-components';

// IMPORTA O ESTILO DA BIBLIOTECA PARA QUE ELE FUNCIONE NO NOSSO CODIGO
import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
