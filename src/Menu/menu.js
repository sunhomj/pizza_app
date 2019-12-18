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
			{Object.entries(foods).map(([sectionName, foods],j)=>(
				<>
					{/* {console.log([sectionName, foods])} */}
				<h1>{sectionName}</h1>
			<FoodGrid key={foods[j]}>
				
				{foods.map((food) => {
					return (
						<Food key={food.img} img={food.img} onClick={() => {
							setOpenFood(food)
						
						}}>
							<FoodLabel key={food.name}>{food.name}</FoodLabel>
						</Food>
					);
				})}
			</FoodGrid>
				</>
			))}
		</MenuStyled>
	);
};
