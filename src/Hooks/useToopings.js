import React, { useState } from "react";

export function useToopings(defaultTooping) {
    const [toopings, setToopings] = useState(defaultTooping || getDefaultToopings());
    return <div></div>;
}

const toppingsList = [
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
  
function getDefaultToopings = () => {
    

}
