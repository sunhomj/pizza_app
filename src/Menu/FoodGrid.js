import styled from "styled-components";
import { Title } from "../Styles/title";
export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 60%;
    padding-bottom: 40px;
`;

export const Food = styled(Title)`
    height: 100px;
    background-image: ${({ img }) => `url(${img});`};
    background-position: center;
    font-size: 20px;
    background-position-x: left;
    background-size: cover;
    padding: 10px;
    filter: contrast(75%);
    border-radius: 7px;
    margin-top: 3px;
    box-shadow: 0px 0px 2px 0px grey;
    transition-property: box-shadow margin-top filter;
    transition-duration: 0.2s;
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        opacity: 0.7;
        margin-top: 0px;
        margin-bottom: 3px;
        box-shadow: 0px 5px 10px 0px grey;
    }
`;

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 4px;

    border-radius: 10px;
    font-size: 0.7em;
`;
