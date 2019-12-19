import React from "react";
import styled from "styled-components";
import { DialogFooter, DialogContent, ConfirmButton, getPrice } from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";

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
    display: grid;
    grid-template-columns: 15px 20px 150px 20px 60px;
    justify-content: space-between;
`;

export const Order = ({ orders }) => {
    const totalPrice = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    return (
        <OrderStyle>
            {orders.length === 0 ? (
                <OrderContent> yourq Order </OrderContent>
            ) : (
                <OrderContent>
                    <OrderContainer> your Order </OrderContainer>{" "}
                    {orders.map(order => (
                        <OrderContainer>
                            <OrderItems>
                                <div>{order.quantity} </div>
                                <div>X</div>
                                <div>{order.name}</div>
                                <div></div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </OrderItems>
                            <div>{totalPrice}</div>
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
