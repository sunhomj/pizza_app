import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
	height: 1000px;
	margin: 0px 20px 50px 20px;
`;

export const Menu = () => {
	return (
		<MenuStyled>
			<h1>Menu</h1>
			<FoodGrid>
				{foods.map((el) => {
					return (
						<Food img={el.img}>
							<FoodLabel>{el.name}</FoodLabel>
						</Food>
					);
				})}
			</FoodGrid>
		</MenuStyled>
	);
};
