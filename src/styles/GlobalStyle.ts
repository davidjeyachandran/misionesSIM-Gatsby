import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    color: #4a90e2;
  }

  a.active {
    font-weight: 700;
  }
`;

export default GlobalStyle;
