import React from 'react';
import styled from 'styled-components';

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
`;
export const Order = () => {
	return <OrderStyle>haha</OrderStyle>;
};
