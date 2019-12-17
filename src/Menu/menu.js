import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';

const MenuStyled = styled.div`
	border: 2px solid black;
	height: 1000px;
	margin: 0px 400px 50px 20px;
`;

const menu = () => {
	return (
		<MenuStyled>
			{foods.map((el) => {
				return <div key={el.name} img={el.img} />;
			})}
		</MenuStyled>
	);
};

export default menu;
