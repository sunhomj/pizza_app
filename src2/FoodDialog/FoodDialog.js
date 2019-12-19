import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';

const Dialog = styled.div`
  width:500px;
  height:2000px;
  background-color:white;
  position:fixed;
  top:75px;
  border-radius: 10px;
  z-index:5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;
const DialogShadow = styled.div`
position:fixed;
height:100%;
width:100%;
top:0px;
background-color: black;
opacity:0.7;
z-index:4;
`;
const DialogBannerName = styled(FoodLabel)`
font-size:1em;
margin:10px;
`
const DialogBanner = styled.div`
  height:200px;
  border-radius: 10px;
  margin-bottom:20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position:center;
  background-size:cover;
`;
export const FoodDialog = ({openFood, setOpenFood}) => {
  // let openFoodFake={...openFood};

  function closeDialog(){
    setOpenFood();
  }
  if(!openFood) return null;

    return <>
        <DialogShadow onClick={closeDialog}> </DialogShadow>
        <Dialog><DialogBanner img={openFood.img}>
        <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        
        </Dialog>
    </>
    };

