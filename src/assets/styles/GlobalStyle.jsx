import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Manrope', sans-serif;
}

html {
  -webkit-tap-highlight-color: transparent;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}`;

export default GlobalStyle;
