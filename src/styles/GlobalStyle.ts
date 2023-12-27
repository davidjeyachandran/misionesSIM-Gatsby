import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    color: #FA002C;
  }

  a.active {
    font-weight: 700;
  }
`;

export default GlobalStyle;
