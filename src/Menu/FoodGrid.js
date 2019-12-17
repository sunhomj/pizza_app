import styled from 'styled-components';
import { Title } from '../Styles/title';
export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
`;

export const Food = styled(Title)`
	height: 100px;
	background-image: ${({ img }) => `url(${img});`};
	background-position: center;
	font-size:20px;
	background-position-x: left;
	background-size: cover;
	padding: 10px;
	filter:contrast(75%);
	border-radius: 7px;
	box-shadow: 2px 1px 10px 1px grey;
	&:hover{
		cursor : pointer;
		opacity:0.7;
	}
`;

export const FoodLabel = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.8);
	padding: 4px;
	border-radius: 10px;
`;
