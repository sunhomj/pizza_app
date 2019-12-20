import styled from "styled-components";
import React from "react";

const ToopingGrid = styled.div`
    display: grid;

    padding-bottom: 40px;
    grid-template-columns: 35% auto;
`;

const ToopingCheckBox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`;
const CheckBoxLabel = styled.label`
    cursor: pointer;
`;
export function Toopings({ toopings, checkToopings }) {
    let checkboxes = toopings.map((tooping, index) => (
        <CheckBoxLabel>
            <ToopingCheckBox
                type="checkbox"
                key={tooping.name}
                checked={tooping.checked}
                onChange={() => {
                    checkToopings(index);
                }}
            />
            {tooping.name}
        </CheckBoxLabel>
    ));

    return <ToopingGrid>{checkboxes}</ToopingGrid>;
}
