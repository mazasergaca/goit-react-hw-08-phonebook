import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
  overflow-y: scroll;
}

  body {
    height: 100vh;
    margin: 0;

    font-family:  Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(160deg, rgba(3,0,47,1) 0%, rgba(27,41,95,1) 48%, rgba(29,44,98,1) 100%);
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
}

img {
  display: block;
}

h1, h2, p, ul {
  margin: 0;
  padding: 0;
}
`;
