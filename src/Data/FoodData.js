export function formatPrice(price) {
    return price.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    });
}
export const foodItems = [
    {
        name: "Cheese",
        img: "/img/pizza.png",
        section: "Pizza",
        price: 2.2
    },
    {
        name: "Pepperoni",
        img: "/img/pizza2.jpeg",
        section: "Pizza",
        price: 2.7
    },
    {
        name: "Prown",
        img: "/img/sandwich.jpeg",
        section: "Sandwich",
        price: 8
    },
    {
        name: "gyro",
        img: "/img/gyro.jpeg",
        section: "Side",
        price: 6.5
    },
    {
        name: "fires",
        img: "/img/fries.jpeg",
        section: "Side",
        price: 4
    },
    {
        name: "chicken finger",
        img: "/img/chicken-fingers.jpeg",
        section: "Side",
        price: 2.3
    },
    {
        name: "chicken",
        img: "/img/chicken-pizza.jpeg",
        section: "Pizza",
        price: 2
    },
    {
        name: "bom",
        img: "/img/pizza.jpeg",
        section: "Pizza",
        price: 2
    },
    {
        name: "subway",
        img: "/img/sandwich-lemons.jpg",
        section: "Sandwich",
        price: 7
    },
    {
        name: "love",
        img: "/img/pizza2.jpg",
        section: "Pizza",
        price: 2.5
    },
    {
        name: "club",
        img: "/img/club-sandwich.jpg",
        section: "Sandwich",
        price: 6.5
    },
    {
        price: 1,
        name: "Soda",
        section: "Drinks",
        img: "/img/drink.jpg",
        choices: ["Coke", "Sprite", "Root Beer"]
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
