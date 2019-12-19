export const foodItems = [
	{
		name: 'Cheese',
		img: '/img/pizza.png',
		section: 'Pizza'
	},
	{
		name: 'Pepperoni',
		img: '/img/pizza2.jpeg',
		section: 'Pizza'
	},
	{
		name: 'Prown',
		img: '/img/sandwich.jpeg',
		section: 'Sandwich'
	},
	{
		name: 'gyro',
		img: '/img/gyro.jpeg',
		section: 'Side'
	},
	{
		name: 'fires',
		img: '/img/fries.jpeg',
		section: 'Side'
	},
	{
		name: 'chicken finger',
		img: '/img/chicken-fingers.jpeg',
		section: 'Side'
	},
	{
		name: 'chicken',
		img: '/img/chicken-pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'bom',
		img: '/img/pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'subway',
		img: '/img/sandwich-lemons.jpg',
		section: 'Sandwich'
	},
	{
		name: 'love',
		img: '/img/pizza2.jpg',
		section: 'Pizza'
	},
	{
		name: 'club',
		img: '/img/club-sandwich.jpg',
		section: 'Sandwich'
	}
];

export const foods = foodItems.reduce((res, food) => {
	if (!res[food.section]) {
		res[food.section] = [];
	}
	res[food.section].push(food);
	return res;
}, {});
