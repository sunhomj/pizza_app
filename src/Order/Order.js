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

const OrderContainer = styled.div`
    box-shadow: 2px 0px 2px 0px grey;
    padding: 10px;
`;

const OrderItems = styled.div`
    padding: 10x;
`;

export const Order = ({ orders }) => {
    return (
        <OrderStyle>
            {orders.length === 0 ? (
                <OrderContent> yourq Order </OrderContent>
            ) : (
                <OrderContent>
                    <OrderContainer> your Order </OrderContainer>{" "}
                    {orders.map(order => (
                        <OrderContainer>
                            <OrderItems>{order.name}</OrderItems>
                        </OrderContainer>
                    ))}
                </OrderContent>
            )}

            <OrderFooter>
                <ConfirmButton>Check Out</ConfirmButton>
            </OrderFooter>
        </OrderStyle>
    );
};
