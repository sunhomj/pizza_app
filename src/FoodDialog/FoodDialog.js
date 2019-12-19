import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogFoodLabel = styled(FoodLabel)`
    font-size: 1em;
    margin: 10px;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => `background-image: url(${img});`}
    background-position:center;
    background-size: cover;
    border-radius: 10px;
`;
export const DialogContent = styled.div`
    min-height: 100px;
    overflow: auto;
`;

export const DialogFooter = styled.div`
    display: flex;
    justify-content: center;
    height: 60px;
    box-shadow: 0px -3px 6px 0px grey;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: red;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaRed};
`;

export const FoodDialog = ({ openFood, setOpenFood, setOrders, orders }) => {
    function close() {
        setOpenFood();
    }
    const order = {
        name: openFood
    };
    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }
    return openFood ? (
        <>
            <DialogShadow onClick={close}> </DialogShadow>
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogFoodLabel>{openFood.name}</DialogFoodLabel>
                </DialogBanner>
                <DialogContent>dd</DialogContent>

                <DialogFooter>
                    <ConfirmButton onClick={addToOrder}>Confirm</ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    ) : null;
};
