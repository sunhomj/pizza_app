import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
	height: 1000px;
	margin: 0px 20px 50px 20px;
`;

export const Menu = ({ setOpenFood }) => {
	return (
		<MenuStyled>
			{Object.entries(foods).map(([sectionName, foods])=>(
				<>
					{console.log([sectionName, foods])}
				<h1>{sectionName}</h1>
			<FoodGrid>
				{foods.map((food) => {
					return (
						<Food img={food.img} onClick={() => {
							setOpenFood(food)
						}}>
							<FoodLabel>{food.name}</FoodLabel>
						</Food>
					);
				})}
			</FoodGrid>
				</>
			))}
		</MenuStyled>
	);
};
