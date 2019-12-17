import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'
import ScrollToTop from './ScrollToTop/ScrollToTop'
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin:0;
  }
  h1,h2,h3{
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      
      <GlobalStyle whiteColor />
      <Navbar /><Banner /><Menu />
      <div>hellow Sunny</div>
      <ScrollToTop />
    </>
  );
}

export default App;
