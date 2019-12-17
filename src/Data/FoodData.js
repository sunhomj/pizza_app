export const foodItems = [
	{
		name: 'Cheese Pizza',
		img: '/img/pizza.png',
		section: 'Pizza'
	},
	{
		name: 'Pepperoni Pizza',
		img: '/img/pizza2.jpeg',
		section: 'Pizza'
	},
	{
		name: 'Prown Snadwich',
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
		name: 'chicken pizza',
		img: '/img/chicken-pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'bom pizza',
		img: '/img/pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'sandwich-lemons',
		img: '/img/sandwich-lemons.jpg',
		section: 'Sandwich'
	},
	{
		name: 'bom pizza',
		img: '/img/pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'club-sandwich',
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
