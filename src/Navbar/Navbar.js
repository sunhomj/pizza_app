import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';
const NavbarStyled = styled.div`
	background: ${pizzaRed};
	padding: 10px;
	width: 100%;
	position: fixed;
`;

const Logo = styled(Title)`
text-shadow: 1px 3px 1px orange;
font-size: 20px;
color:white;
`;
const Navbar = () => {
	return (
		<NavbarStyled>
			<Logo>Sunny pizza 🍕</Logo>
		</NavbarStyled>
	);
};

export default Navbar;
