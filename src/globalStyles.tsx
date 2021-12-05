import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 375px) {
    padding: 0;
  }
`;

export default GlobalStyle;
