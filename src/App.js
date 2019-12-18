import React, {useState} from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import { FoodDialog } from './FoodDialog/FoodDialog'

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      
      <GlobalStyle />
      <FoodDialog openFood={openFood}/>
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
      <ScrollToTop />
    </>
  );
}

export default App;
