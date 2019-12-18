import React from 'react';
import styled from 'styled-components';
import { DialogFooter, DialogContent, ConfirmButton } from '../FoodDialog/FoodDialog';

const OrderStyle = styled.div`
	right: 0px;
	top: 47px;
	width: 340px;
	position: fixed;
	height: calc(100% - 50px);
	border: 1px solid blue;
	background-color: white;
	box-shadow: 4px 0px 5px 4px grey;
	z-index: 10;
	display: flex;
	flex-direction: dolumn;
`;

const OrderContent = styled(DialogContent)`
height:100%;
padding: 20px;`;

export const Order = () => {
	return (
		<OrderStyle>
			<OrderContent>your order is empty</OrderContent>
			<DialogContent>
				<DialogFooter>
					<ConfirmButton>Check Out</ConfirmButton>{' '}
				</DialogFooter>
			</DialogContent>
		</OrderStyle>
	);
};
