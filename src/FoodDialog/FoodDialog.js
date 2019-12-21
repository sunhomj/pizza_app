import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { Toopings } from "./Toopings";
import { useToopings } from "../Hooks/useToopings";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "./Choices";

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
    top: ${({ img }) => (img ? `100px` : `20px`)};
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;

    ${({ img }) => (img ? `background-image: url(${img});` : ` min-height: 75px;`)}
    background-position:center;
    background-size: cover;
    border-radius: 10px;
`;
export const DialogContent = styled.div`
    min-height: 100px;
    overflow: auto;
    padding: 0px 40px;
    margin-bottom: 40px;
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

    ${({ disabled }) =>
        disabled &&
        `opacity : 0.5;
    background-color: grey; 
    pointer-events: none;`}
`;

function hasTooping(openFood) {
    return openFood.section === "Pizza";
}

export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />;
}

export function getPrice(order) {
    return order.quantity * order.price + order.toopings.filter(t => t.checked).length * 0.5;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toopings = useToopings(openFood.toopings);
    const choiceRadio = useChoice(openFood.choice);
    function close() {
        setOpenFood();
    }
    const order = {
        ...openFood,
        quantity: quantity.value,
        toopings: toopings.toopings,
        choices: choiceRadio.value
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
                    <DialogFoodLabel>
                        <div>{openFood.name}</div>
                        <div>{formatPrice(openFood.price)}</div>
                    </DialogFoodLabel>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity}></QuantityInput>
                    {hasTooping(openFood) && (
                        <>
                            <h3>Some tooping?</h3>
                            <span>($0.5 each)</span>
                            <Toopings {...toopings}></Toopings>
                        </>
                    )}
                    {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio} />}
                </DialogContent>

                <DialogFooter>
                    <ConfirmButton onClick={addToOrder} disabled={openFood.choices && !choiceRadio.value}>
                        Add to Order : {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    ) : null;
}
