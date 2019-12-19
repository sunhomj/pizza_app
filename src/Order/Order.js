import React from "react";
import styled from "styled-components";
import {
    DialogFooter,
    DialogContent,
    ConfirmButton
} from "../FoodDialog/FoodDialog";

const OrderStyle = styled.div`
    right: 0px;
    top: 47px;
    width: 340px;
    position: fixed;
    height: calc(100% - 50px);
    background-color: white;
    box-shadow: 4px 0px 5px 4px grey;
    z-index: 10;
    display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    height: 100%;
    padding: 20px;
`;

const OrderFooter = styled(DialogFooter)`
    width: 100%;
`;

export const Order = ({ orders }) => {
    return (
        <OrderStyle>
            {!orders ? (
                <OrderContent> your order is empty</OrderContent>
            ) : (
                <OrderContent>found {orders.length} orders </OrderContent>
            )}

            <OrderFooter>
                <ConfirmButton>Check Out</ConfirmButton>
            </OrderFooter>
        </OrderStyle>
    );
};
