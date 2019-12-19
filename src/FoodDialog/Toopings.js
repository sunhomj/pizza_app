import styled from "styled-components";
import React from "react";

const ToopingGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const ToopingCheckBox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`;
const CheckBoxLabel = styled.label`
    cursor: pointer;
`;
export function Toopings() {
    return (
        <ToopingGrid>
            <ToopingCheckBox
                type="checkbox"
                onClick={() => {
                    console.log("hellow");
                }}
            />
            <CheckBoxLabel>Tooping</CheckBoxLabel>
        </ToopingGrid>
    );
}
