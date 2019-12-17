import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
	background: ${pizzaRed};
	padding: 10px;
	width: 100%;
	top: 0;
	position: sticky;
	display: block;
	z-index: 999;
`;

const Logo = styled(Title)`
text-shadow: 1px 3px 1px orange;
font-size: 20px;
color:white;
`;
export const Navbar = () => {
	return (
		<NavbarStyled>
			<Logo>
				Sunny pizza
				<span role="img" aria-label="pizza">
					🍕
				</span>
			</Logo>
		</NavbarStyled>
	);
};
