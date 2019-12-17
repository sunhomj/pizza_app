import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'
import ScrollToTop from './ScrollToTop/ScrollToTop'


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
