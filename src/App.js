import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/menu";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    // const [openFood, setOpenFood] = useState();
    console.log(orders);
    return (
        <>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <Navbar />
            <Banner />
            <Order {...orders} />
            <Menu {...openFood} />
            <ScrollToTop />
        </>
    );
}

export default App;
