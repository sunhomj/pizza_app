import React from "react";
import styled from "styled-components";
import { foods, formatPrice } from "../Data/FoodData";
import { FoodGrid, Food, FoodLabel } from "./FoodGrid";

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 20px 50px 20px;
`;

export const Menu = ({ setOpenFood }) => {
    return (
        <MenuStyled>
            {Object.entries(foods).map(([sectionName, foods]) => (
                <>
                    <h1>{sectionName}</h1>
                    <FoodGrid>
                        {foods.map(food => {
                            return (
                                <Food
                                    img={food.img}
                                    key={food.name}
                                    onClick={() => {
                                        setOpenFood(food);
                                    }}
                                >
                                    <FoodLabel key={food.img}>
                                        <div>{food.name}</div>
                                        <div>{formatPrice(food.price)}</div>
                                    </FoodLabel>
                                </Food>
                            );
                        })}
                    </FoodGrid>
                </>
            ))}
        </MenuStyled>
    );
};
