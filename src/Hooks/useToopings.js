import { useState } from "react";

export function useToopings(defaultTooping) {
    const [toopings, setToopings] = useState(defaultTooping || getDefaultToopings());
    function checkToopings(index) {
        const newtoopings = [...toopings];
        newtoopings[index].checked = !toopings[index].checked;
        setToopings(newtoopings);
    }

    return {
        toopings,
        checkToopings
    };
}

const toopingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Pineapple",
    "Ham",
    "Spinach",
    "Artichokes",
    "Mushrooms",
    "Anchovies"
];

function getDefaultToopings() {
    const tooping = toopingsList.map(el => {
        return {
            name: el,
            checked: false
        };
    });
    return tooping;
}
