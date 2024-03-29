import React from "react";
import styled from "styled-components";
import { DialogFooter, DialogContent, ConfirmButton, getPrice } from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";

const OrderStyle = styled.div`
    position: fixed;
    right: 0px;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    z-index: 10;
    box-shadow: 4px 0px 5px 4px grey;
    display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    height: 100%;
    padding: 20px;
    font-family: "Righteous", cursive;
    text-align: center;
`;

const OrderFooter = styled(DialogFooter)`
    width: 100%;
`;

const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
`;

const OrderItems = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const OrderItemEdit = styled.div`
    background-color: white;
    border-radius: 10px;

    &:hover {
        background-color: lightpink;
        cursor: pointer;
        opacity: 0.7;
    }
`;

const DetailedTooping = styled.div`
    font-size: 10px;
    display: grid;
    grid-gap: 4px;
    text-align: center;

    justify-content: center;
    grid-template-columns: 20% 20% 20% 20% 20%;

    align-content: center;
`;

const ToopingBorder = styled.div`
    border: 1px solid lightpink;
    grid-gap: 2px;
    border-radius: 10px;
`;

export const Order = ({ orders, setOrders, openFood, setOpenFood }) => {
    const subTotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    const tax = subTotal * 0.07;
    const totalPrice = subTotal - tax;
    let toopingsum = null;
    const deleteOrder = index => {
        let newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    return (
        <OrderStyle>
            {orders.length === 0 ? (
                <OrderContent> Your Order is Empty </OrderContent>
            ) : (
                <OrderContent>
                    <OrderContainer> your Order </OrderContainer>{" "}
                    {orders.map((order, index) => (
                        <OrderContainer>
                            <OrderItems>
                                <div>{order.quantity} </div>

                                <OrderItemEdit
                                    onClick={() => {
                                        setOpenFood({ ...order, index });
                                    }}
                                >
                                    {order.name}
                                </OrderItemEdit>
                                <div style={{ cursor: "pointer" }} onClick={() => deleteOrder(index)}>
                                    {" "}
                                    🚮{" "}
                                </div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </OrderItems>
                            <DetailedTooping>
                                {order.choices ? <ToopingBorder>{order.choices}</ToopingBorder> : null}
                            </DetailedTooping>
                            <DetailedTooping>
                                {order.toopings
                                    .filter(t => t.checked)
                                    .map(tooping => (
                                        <ToopingBorder>{tooping.name}</ToopingBorder>
                                    ))}
                            </DetailedTooping>
                        </OrderContainer>
                    ))}
                    <OrderContainer>
                        <OrderItems>
                            <div></div>

                            <div>SubTotal + Tooping</div>
                            <div>{formatPrice(subTotal - toopingsum)}</div>
                            <div></div>
                        </OrderItems>

                        <OrderItems>
                            <div></div>

                            <div>Tax</div>
                            <div>{formatPrice(tax)}</div>
                            <div></div>
                        </OrderItems>

                        <OrderItems>
                            <div></div>

                            <div>Total Price</div>
                            <div>{formatPrice(totalPrice)}</div>
                            <div></div>
                        </OrderItems>
                    </OrderContainer>
                </OrderContent>
            )}

            <OrderFooter>
                <ConfirmButton>Check Out</ConfirmButton>
            </OrderFooter>
        </OrderStyle>
    );
};
