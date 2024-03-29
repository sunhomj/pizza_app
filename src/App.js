import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({ ...openFood, ...orders });

    return (
        <>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <Navbar />
            <Banner />
            <Order {...orders} {...openFood} />
            <Menu {...openFood} />
        </>
    );
}

export default App;
