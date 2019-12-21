import React from "react";
import styled from "styled-components";

const DrinkContainer = styled.div`
    display: inline-block;
    padding: 5px;
    cursor: pointer;
`;

const DrinkInput = styled.input`
    padding: 10px;
    cursor: pointer;
`;
const DrinkLabel = styled.label`
    cursor: pointer;
`;

export function Choices({ openFood, choiceRadio }) {
    return (
        <div>
            <h3>Choose One</h3>
            {openFood.choices.map(choice => (
                <DrinkContainer>
                    <DrinkInput
                        type="radio"
                        id={choice}
                        name="choice"
                        value={choice}
                        checked={choiceRadio.value === choice}
                        onChange={choiceRadio.onChange}
                    ></DrinkInput>

                    <DrinkLabel for={choice}>{choice}</DrinkLabel>
                </DrinkContainer>
            ))}
        </div>
    );
}
